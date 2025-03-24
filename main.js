// Lógica de despliegues de contenidos
const menuItems = document.querySelectorAll(".menu-item");
const contentSections = document.querySelectorAll(".content-section");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // Quitar la clase 'active' de todos los menús
    menuItems.forEach((menu) => menu.classList.remove("active"));
    // Agregar la clase 'active' al ítem clicado
    item.classList.add("active");

    // Ocultar todas las secciones de contenido
    contentSections.forEach((section) => section.classList.remove("active"));
    // Mostrar la sección de contenido correspondiente al ítem clicado
    contentSections[index].classList.add("active");

    // Inicializar el gráfico solo si la sección activa es "Batch metrics"
    if (contentSections[index].id === "batch-metrics") {
      initBatchMetricsChart(); // Llamar a la función para inicializar el gráfico
    }
  });
});
// Fin de lógica de despliegues de contenidos

// Lógica de botón de perfil
const menuButton = document.querySelector(".profile-menu-btn");
const profileMenu = document.querySelector(".profile-menu");

menuButton.addEventListener("click", () => {
  profileMenu.style.display = profileMenu.style.display === "block" ? "none" : "block";
});

// Ocultar el menú si se hace clic fuera de él
document.addEventListener("click", (event) => {
  if (!menuButton.contains(event.target) && !profileMenu.contains(event.target)) {
    profileMenu.style.display = "none";
  }
});
// Fin de lógica de botón de perfil

// Lógica de ECharts para "Batch metrics"
function initBatchMetricsChart() {
  // Seleccionar el contenedor del gráfico
  const chartContainer = document.getElementById('batch-chart');

  // Verificar si el contenedor existe
  if (!chartContainer) {
    console.error('El contenedor del gráfico no fue encontrado.');
    return;
  }

  // Inicializar el gráfico
  const batchChart = echarts.init(chartContainer);

  // Configurar las opciones del gráfico
  const options = {
    title: {
      text: 'Batch Metrics Overview', // Título del gráfico
      left: 'center', // Centrar el título
    },
    tooltip: {
      trigger: 'axis', // Mostrar tooltips al pasar el mouse sobre los datos
    },
    xAxis: {
      type: 'category', // Eje X categórico
      data: ['Batch 1', 'Batch 2', 'Batch 3', 'Batch 4', 'Batch 5'], // Etiquetas del eje X
    },
    yAxis: {
      type: 'value', // Eje Y numérico
    },
    series: [
      {
        name: 'Quality Score', // Nombre de la serie
        type: 'bar', // Tipo de gráfico (barras)
        data: [85, 90, 78, 93, 88], // Datos del gráfico
      },
    ],
  };

  // Aplicar las opciones al gráfico
  batchChart.setOption(options);
}