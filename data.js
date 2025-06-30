const repositoryData = [
    {
       id: 1,
        name: "Malestar Psicológico (Kessler)",
        scaleFullName: "Kessler Psychological Distress Scale (K10)",
        variable: "Malestar Psicológico Subjetivo",
        definition: "Mide el nivel de malestar psicológico no específico de una persona, cubriendo síntomas de ansiedad y depresión experimentados en las últimas 4 semanas.",
        items: "10 ítems.",
        authors: "Larzabal-Fernandez, A., Pilco, K., Moreta-Herrera, R., & Rodas, J.A. (2024).",
        reliabilityEC: "<strong>Fiabilidad en Ecuador (Adolescentes):</strong> Excelente consistencia interna (Alfa de Cronbach = .90; Omega = .91).",
        validityEC: "<strong>Validez en Ecuador (Adolescentes):</strong> Se confirma una estructura de un solo factor con buen ajuste a los datos (CFI = .98, TLI = .98, RMSEA = .08).",
        sourceLink: "https://doi.org/10.1007/s10578-023-01577-z"
    },
    {
        id: 2,
        name: "Intención de Consumo de Alcohol",
        scaleFullName: "Modelo de Medición para la Intención de Consumo de Alcohol",
        variable: "Intención Conductual de Consumo de Alcohol",
        definition: "Evalúa la predisposición y la planificación de un individuo para consumir bebidas alcohólicas en el futuro cercano.",
        items: "3 ítems.",
        authors: "Moreta-Herrera, R., et al. (2018).",
        reliabilityEC: "<strong>Fiabilidad en Ecuador (Adolescentes):</strong> Alta consistencia interna (Alfa de Cronbach = .91).",
        validityEC: "<strong>Validez en Ecuador (Adolescentes):</strong> El análisis factorial confirmatorio muestra un ajuste adecuado del modelo (GFI = .99, CFI = .99, RMSEA = .08).",
        sourceLink: "https://doi.org/10.21865/RIDEP48.2.08"
    },
    {
        id: 3,
        name: "Escepticismo al Cambio Climático",
        scaleFullName: "Climate Change Scepticism Questionnaire",
        variable: "Escepticismo hacia el Cambio Climático",
        definition: "Mide el grado de duda sobre la existencia, las causas antropogénicas y las consecuencias del cambio climático.",
        items: "Número de ítems no especificado en el abstract (requiere consulta del artículo completo).",
        authors: "Larzabal-Fernandez, A., Castrechini, A., Moreta-Herrera, R., & Vázquez, A. (2024).",
        reliabilityEC: "<strong>Fiabilidad (Muestra Española):</strong> Buena consistencia interna (Alfa de Cronbach = .81).",
        validityEC: "<strong>Validez (Muestra Española):</strong> Se confirma una estructura de un solo factor con invarianza de medida entre géneros.",
        sourceLink: "https://doi.org/10.1080/21711976.2023.2234888"
    },
    {
        id: 4,
        name: "Miedo al COVID-19",
        scaleFullName: "Fear of COVID-19 Scale (FCV-19S)",
        variable: "Miedo al COVID-19",
        definition: "Evalúa el miedo y la aprensión específicos relacionados con la pandemia de COVID-19.",
        items: "7 ítems.",
        authors: "Ahorsu, D. K., Lin, C. Y., Imani, V., Saffari, M., Griffiths, M. D., & Pakpour, A. H. (2020).",
        reliabilityEC: "<strong>Fiabilidad (Internacional):</strong> El estudio valida la escala en 48 países (Ecuador no figura explícitamente en la lista principal del abstract), mostrando propiedades psicométricas robustas a nivel global.",
        validityEC: "<strong>Validez (Internacional):</strong> Se confirma la invarianza de medida a través de los 48 países, lo que sugiere que la escala mide el mismo constructo de manera consistente a nivel mundial.",
        sourceLink: "https://doi.org/10.1007/s11469-020-00355-8"
    },
    {
        id: 5,
        name: "Triada Oscura de la Personalidad",
        scaleFullName: "Dark Triad Dirty Dozen (DTDD)",
        variable: "Triada Oscura (Narcisismo, Maquiavelismo, Psicopatía)",
        definition: "Mide tres rasgos de personalidad socialmente aversivos: narcisismo (grandiosidad), maquiavelismo (manipulación) y psicopatía (falta de empatía).",
        items: "12 ítems (4 por cada rasgo).",
        authors: "Kajonius, P. J., Persson, B. N., & Jonason, P. K. (2015).",
        reliabilityEC: "<strong>Fiabilidad (Región LATAM):</strong> El estudio valida la escala en 8 regiones mundiales, incluyendo América Latina. La fiabilidad para la región es aceptable.",
        validityEC: "<strong>Validez (Región LATAM):</strong> Se confirma la estructura de tres factores correlacionados en la mayoría de las regiones, incluida América Latina, aunque con algunas variaciones.",
        sourceLink: "https://doi.org/10.1016/j.paid.2014.10.038"
    }
];

// --- BASE DE DATOS DEL BLOG ---
// Para añadir un nuevo post, haz lo mismo: copia un bloque y edítalo.
const blogData = [
    {
        title: "3 Errores Comunes al Plantear una Hipótesis de Investigación",
        date: "15 de Julio, 2024",
        summary: "Descubre los fallos más frecuentes que debilitan un proyecto de investigación desde su concepción y cómo evitarlos.",
        link: "#" // Link al artículo completo
    },
    {
        title: "El Sello de Aprobación Ética: Más que un Trámite, una Garantía de Calidad",
        date: "01 de Julio, 2024",
        summary: "Analizamos por qué la revisión por un comité de ética independiente fortalece la validez y el impacto de tu estudio.",
        link: "#"
    },
    {
        title: "Guía Rápida para Elegir la Revista Correcta para tu Artículo",
        date: "20 de Junio, 2024",
        summary: "No todas las revistas son iguales. Aprende a identificar la mejor opción para maximizar la visibilidad de tu trabajo.",
        link: "#"
    }
];
