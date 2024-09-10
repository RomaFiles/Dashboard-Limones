// Revenue Chart
var revenueCtx = document.getElementById("revenueChart").getContext("2d");
var revenueChart = new Chart(revenueCtx, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
    ],
    datasets: [
      {
        label: "Revenue",
        data: [
          30000, 50000, 60000, 80000, 75000, 50000, 90000, 80000, 85000, 70000,
        ],
        backgroundColor: "rgba(0, 123, 255, 0.2)",
        borderColor: "#007BFF",
        borderWidth: 2,
        fill: true,
      },
    ],
  },
});

// Consumer Types Chart
var consumerTypesCtx = document
  .getElementById("consumerTypesChart")
  .getContext("2d");
var consumerTypesChart = new Chart(consumerTypesCtx, {
  type: "bar",
  data: {
    labels: ["0-6", "6-12", "12-18", "18-24"],
    datasets: [
      {
        label: "Consumer Types",
        data: [500, 1500, 2000, 1200],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
        borderWidth: 1,
      },
    ],
  },
});

// Consumers' Habits Chart (Bubble Chart)
var consumerHabitsCtx = document
  .getElementById("consumerHabitsChart")
  .getContext("2d");
var consumerHabitsChart = new Chart(consumerHabitsCtx, {
  type: "bubble",
  data: {
    datasets: [
      {
        label: "Consumers' Habits",
        data: [
          { x: 10, y: 20, r: 15 },
          { x: 15, y: 10, r: 10 },
          { x: 20, y: 30, r: 25 },
        ],
        backgroundColor: "#36A2EB",
      },
    ],
  },
});

// Popular Categories Chart
var popularCategoriesCtx = document
  .getElementById("popularCategoriesChart")
  .getContext("2d");
var popularCategoriesChart = new Chart(popularCategoriesCtx, {
  type: "doughnut",
  data: {
    labels: ["Category 1", "Category 2", "Category 3"],
    datasets: [
      {
        label: "Popular Categories",
        data: [50, 30, 20],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        borderWidth: 1,
      },
    ],
  },
});
