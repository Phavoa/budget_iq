import { Inngest } from "inngest";

// Create a client to send and receive events
export const inngest = new Inngest({
  id: "budgetiq",
  name: "BudgetIQ",
  retryFunction: async (attempts) => ({
    delay: Math.pow(2, attempts) * 1000,
    maxAttempts: 2,
  }),
});
