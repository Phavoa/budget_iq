import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Img,
  Button,
} from "@react-email/components";

// Helper function to format amounts with 2 decimal places
const formatAmount = (amount) => {
  return `₦${parseFloat(amount).toFixed(2)}`;
};

// Dummy data for preview remains the same
const PREVIEW_DATA = {
  monthlyReport: {
    userName: "John Doe",
    type: "monthly-report",
    data: {
      month: "December",
      stats: {
        totalIncome: 5000,
        totalExpenses: 3500,
        byCategory: {
          housing: 1500,
          groceries: 600,
          transportation: 400,
          entertainment: 300,
          utilities: 700,
        },
      },
      insights: [
        "Your housing expenses are 43% of your total spending - consider reviewing your housing costs.",
        "Great job keeping entertainment expenses under control this month!",
        "Setting up automatic savings could help you save 20% more of your income.",
      ],
    },
  },
  budgetAlert: {
    userName: "John Doe",
    type: "budget-alert",
    data: {
      percentageUsed: 85,
      budgetAmount: 4000,
      totalExpenses: 3400,
    },
  },
};

export default function EmailTemplate({
  userName = PREVIEW_DATA.monthlyReport.userName,
  type = PREVIEW_DATA.monthlyReport.type,
  data = PREVIEW_DATA.monthlyReport.data,
}) {
  if (type === "monthly-report") {
    return (
      <Html>
        <Head />
        <Preview>Your Monthly Financial Report</Preview>
        <Body style={styles.body}>
          <Container style={styles.container}>
            {/* Header with Logo */}
            <Section style={styles.header}>
              <Img
                src="https://res.cloudinary.com/ddg1qwzyy/image/upload/v1738442678/hhj8xlu0mgvj4jgvpzwi.svg" // Replace with your logo URL
                alt="BudgetIQ Logo"
                style={styles.logo}
              />
              <Heading style={styles.title}>Monthly Financial Report</Heading>
            </Section>

            {/* Greeting */}
            <Text style={styles.greeting}>Hello {userName},</Text>
            <Text style={styles.intro}>
              Here’s your financial summary for{" "}
              <strong style={styles.highlight}>{data?.month}</strong>:
            </Text>

            {/* Main Stats */}
            <Section style={styles.statsContainer}>
              <div style={styles.stat}>
                <Text style={styles.statLabel}>Total Income</Text>
                <Text style={styles.statValue}>
                  {formatAmount(data?.stats.totalIncome)}
                </Text>
              </div>
              <div style={styles.stat}>
                <Text style={styles.statLabel}>Total Expenses</Text>
                <Text style={styles.statValue}>
                  {formatAmount(data?.stats.totalExpenses)}
                </Text>
              </div>
              <div style={styles.stat}>
                <Text style={styles.statLabel}>Net Savings</Text>
                <Text style={styles.statValue}>
                  {formatAmount(data?.stats.totalIncome - data?.stats.totalExpenses)}
                </Text>
              </div>
            </Section>

            {/* Category Breakdown */}
            {data?.stats?.byCategory && (
              <Section style={styles.section}>
                <Heading style={styles.sectionHeading}>
                  Expenses by Category
                </Heading>
                {Object.entries(data?.stats.byCategory).map(
                  ([category, amount]) => (
                    <div key={category} style={styles.row}>
                      <Text style={styles.rowLabel}>{category}</Text>
                      <Text style={styles.rowValue}>
                        {formatAmount(amount)}
                      </Text>
                    </div>
                  )
                )}
              </Section>
            )}

            {/* AI Insights */}
            {data?.insights && (
              <Section style={styles.section}>
                <Heading style={styles.sectionHeading}>BudgetIQ Insights</Heading>
                {data.insights.map((insight, index) => (
                  <Text key={index} style={styles.insightText}>
                    • {insight}
                  </Text>
                ))}
              </Section>
            )}

            {/* Call-to-Action Button */}
            <Section style={styles.ctaSection}>
              <Button style={styles.ctaButton} href="https://budgetiq.com">
                View Full Report
              </Button>
            </Section>

            {/* Footer */}
            <Section style={styles.footer}>
              <Text style={styles.footerText}>
                Thank you for using BudgetIQ. Stay on top of your finances for a
                brighter future!
              </Text>
              <Text style={styles.footerLink}>
                <a href="https://budgetiq.com" style={styles.link}>
                  Visit BudgetIQ
                </a>
              </Text>
            </Section>
          </Container>
        </Body>
      </Html>
    );
  }

  if (type === "budget-alert") {
    return (
      <Html>
        <Head />
        <Preview>Budget Alert</Preview>
        <Body style={styles.body}>
          <Container style={styles.container}>
            {/* Header with Logo */}
            <Section style={styles.header}>
              <Img
                src="https://example.com/logo.png" // Replace with your logo URL
                alt="BudgetIQ Logo"
                style={styles.logo}
              />
              <Heading style={styles.title}>Budget Alert</Heading>
            </Section>

            {/* Greeting */}
            <Text style={styles.greeting}>Hello {userName},</Text>
            <Text style={styles.intro}>
              You’ve used{" "}
              <strong style={styles.highlight}>
                {data?.percentageUsed.toFixed(1)}%
              </strong>{" "}
              of your monthly budget.
            </Text>

            {/* Budget Stats */}
            <Section style={styles.statsContainer}>
              <div style={styles.stat}>
                <Text style={styles.statLabel}>Budget Amount</Text>
                <Text style={styles.statValue}>
                  {formatAmount(data?.budgetAmount)}
                </Text>
              </div>
              <div style={styles.stat}>
                <Text style={styles.statLabel}>Spent So Far</Text>
                <Text style={styles.statValue}>
                  {formatAmount(data?.totalExpenses)}
                </Text>
              </div>
              <div style={styles.stat}>
                <Text style={styles.statLabel}>Remaining</Text>
                <Text style={styles.statValue}>
                  {formatAmount(data?.budgetAmount - data?.totalExpenses)}
                </Text>
              </div>
            </Section>

            {/* Call-to-Action Button */}
            <Section style={styles.ctaSection}>
              <Button style={styles.ctaButton} href="https://budgetiq.com">
                Manage Your Budget
              </Button>
            </Section>

            {/* Footer */}
            <Section style={styles.footer}>
              <Text style={styles.footerText}>
                Thank you for using BudgetIQ. Stay on top of your finances for a
                brighter future!
              </Text>
              <Text style={styles.footerLink}>
                <a href="https://budgetiq.com" style={styles.link}>
                  Visit BudgetIQ
                </a>
              </Text>
            </Section>
          </Container>
        </Body>
      </Html>
    );
  }
}

const styles = {
  body: {
    backgroundColor: "#f7fafc",
    fontFamily: "'Inter', sans-serif",
    margin: 0,
    padding: "20px 0",
  },
  container: {
    backgroundColor: "#ffffff",
    margin: "0 auto",
    padding: "40px",
    borderRadius: "12px",
    maxWidth: "600px",
    boxShadow: "0 4px 24px rgba(0, 0, 0, 0.1)",
  },
  header: {
    textAlign: "center",
    marginBottom: "32px",
  },
  logo: {
    width: "120px",
    marginBottom: "16px",
  },
  title: {
    color: "#1a202c",
    fontSize: "28px",
    fontWeight: "700",
    marginBottom: "8px",
  },
  greeting: {
    color: "#4a5568",
    fontSize: "18px",
    marginBottom: "12px",
  },
  intro: {
    color: "#4a5568",
    fontSize: "16px",
    marginBottom: "24px",
  },
  highlight: {
    color: "#3182ce",
    fontWeight: "600",
  },
  statsContainer: {
    backgroundColor: "#edf2f7",
    borderRadius: "8px",
    padding: "24px",
    marginBottom: "32px",
  },
  stat: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "12px",
  },
  statLabel: {
    color: "#4a5568",
    fontSize: "16px",
  },
  statValue: {
    color: "#1a202c",
    fontSize: "18px",
    fontWeight: "600",
  },
  section: {
    marginBottom: "32px",
  },
  sectionHeading: {
    color: "#1a202c",
    fontSize: "22px",
    fontWeight: "600",
    marginBottom: "16px",
    borderBottom: "2px solid #3182ce",
    paddingBottom: "8px",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    padding: "12px 0",
    borderBottom: "1px solid #e2e8f0",
  },
  rowLabel: {
    color: "#4a5568",
    fontSize: "16px",
  },
  rowValue: {
    color: "#1a202c",
    fontSize: "16px",
    fontWeight: "500",
  },
  insightText: {
    color: "#4a5568",
    fontSize: "16px",
    lineHeight: "1.6",
    marginBottom: "12px",
  },
  ctaSection: {
    textAlign: "center",
    marginBottom: "32px",
  },
  ctaButton: {
    backgroundColor: "#3182ce",
    color: "#ffffff",
    fontSize: "16px",
    fontWeight: "600",
    padding: "12px 24px",
    borderRadius: "8px",
    textDecoration: "none",
  },
  footer: {
    textAlign: "center",
    marginTop: "32px",
    paddingTop: "24px",
    borderTop: "1px solid #e2e8f0",
  },
  footerText: {
    color: "#4a5568",
    fontSize: "14px",
    marginBottom: "8px",
  },
  footerLink: {
    color: "#3182ce",
    fontSize: "14px",
  },
  link: {
    color: "#E76A35",
    textDecoration: "none",
  },
};