import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { v4 as uuidv4 } from "uuid";

export const userAlertsRouter = createTRPCRouter({
  getAlerts: publicProcedure.input(z.string()).query(async ({ ctx, input }) => {
    const userId = input;

    try {
      const user = await ctx.prisma.userAlerts.findFirst({
        where: { userId: { equals: userId } },
        select: {
          alerts: true,
        },
      });
      if (!user) {
        throw new Error("User not found.");
      }
      return user.alerts ?? [];
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch alerts.");
    }
  }),
  addAlert: publicProcedure
    .input(z.object({ userId: z.string(), alert: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const { userId, alert } = input;

      try {
        const updatedUser = await ctx.prisma.userAlerts.updateMany({
          where: { userId: { equals: userId } },
          data: {
            alerts: { push: alert },
          },
        });

        if (updatedUser.count === 0) {
          throw new Error("User not found.");
        }
        return updatedUser;
      } catch (err) {
        console.log(err);
        throw new Error("Failed to add alert.");
      }
    }),
  removeAlert: publicProcedure
    .input(
      z.object({
        userId: z.string(),
        alert: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { userId, alert } = input;

      try {
        const user = await ctx.prisma.userAlerts.findFirst({
          where: { userId },
        });

        if (!user) {
          throw new Error("User not found.");
        }

        const updatedUser = await ctx.prisma.userAlerts.update({
          where: { id: user.id },
          data: {
            alerts: {
              set: user.alerts.filter((a) => a !== alert),
            },
          },
        });

        return updatedUser.alerts;
      } catch (err) {
        console.log(err);
        throw new Error("Failed to remove alert.");
      }
    }),
  createUser: publicProcedure.mutation(({ ctx }) => {
    const userId = uuidv4();
    try {
      const newUser = ctx.prisma.userAlerts.create({
        data: {
          userId,
          alerts: [],
          matchedListings: [],
        },
      });
      return newUser;
    } catch (err) {
      console.log(err);
      throw new Error("Failed to create user.");
    }
  }),
});
