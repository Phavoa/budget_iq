/** @type {import('tailwindcss').Config} */

const baseColors = [
	"gray",
	"red",
	"yellow",
	"green",
	"blue",
	"indigo",
	"purple",
	"pink",
  ];
  
  const shadeMapping = {
	"50": "900",
	"100": "800",
	"200": "700",
	"300": "600",
	"400": "500",
	"500": "400",
	"600": "300",
	"700": "200",
	"800": "100",
	"900": "50",
  };
  
  const generateColorPalette = () => {
	const colors = {};
  
	baseColors.forEach((color) => {
	  colors[color] = {};
	  Object.entries(shadeMapping).forEach(([lightShade, darkShade]) => {
		colors[color][lightShade] = `var(--color-${color}-${lightShade})`;
		colors[color][darkShade] = `var(--color-${color}-${darkShade})`;
	  });
	});
  
	return colors;
  };
  
  module.exports = {
	darkMode: ["class"], // Enable dark mode using the 'class' strategy
	content: [
	  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./components/**/*.{js,ts,jsx,tsx,mdx}",
	  "./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
	  extend: {
		colors: {
		   // Add dynamically generated colors
		   
		  background: "hsl(var(--background))",
		  foreground: "hsl(var(--foreground))",
		  card: {
			DEFAULT: "hsl(var(--card))",
			foreground: "hsl(var(--card-foreground))",
		  },
		  popover: {
			DEFAULT: "hsl(var(--popover))",
			foreground: "hsl(var(--popover-foreground))",
		  },
		  primary: {
			DEFAULT: "hsl(var(--primary))",
			foreground: "hsl(var(--primary-foreground))",
		  },
		  secondary: {
			DEFAULT: "hsl(var(--secondary))",
			foreground: "hsl(var(--secondary-foreground))",
		  },
		  muted: {
			DEFAULT: "hsl(var(--muted))",
			foreground: "hsl(var(--muted-foreground))",
		  },
		  accent: {
			DEFAULT: "hsl(var(--accent))",
			foreground: "hsl(var(--accent-foreground))",
		  },
		  destructive: {
			DEFAULT: "hsl(var(--destructive))",
			foreground: "hsl(var(--destructive-foreground))",
		  },
		  border: "hsl(var(--border))",
		  input: "hsl(var(--input))",
		  ring: "hsl(var(--ring))",
		  chart: {
			1: "hsl(var(--chart-1))",
			2: "hsl(var(--chart-2))",
			3: "hsl(var(--chart-3))",
			4: "hsl(var(--chart-4))",
			5: "hsl(var(--chart-5))",
		  },
		  ...generateColorPalette
		},
		borderRadius: {
		  lg: "var(--radius)",
		  md: "calc(var(--radius) - 2px)",
		  sm: "calc(var(--radius) - 4px)",
		},
	  },
	},
	plugins: [require("tailwindcss-animate")],
  };