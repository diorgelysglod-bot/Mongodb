# GlobalMarket Analytics & Search Engine 🚀

![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Atlas](https://img.shields.io/badge/Atlas-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Status](https://img.shields.io/badge/Status-Completed-success)

Este repositorio contiene los scripts y la documentación técnica del proyecto **GlobalMarket**, una solución de análisis de datos y motor de búsqueda implementada sobre **MongoDB Atlas**. El objetivo principal es la migración y optimización de un catálogo de e-commerce desde un esquema relacional a uno documental para mejorar la escalabilidad y el rendimiento.

---

## 📋 Tabla de Contenidos
1. [Contexto del Proyecto](#contexto-del-proyecto)
2. [Fuente de Datos](#fuente-de-datos)
3. [Estructura del Repositorio](#estructura-del-repositorio)
4. [Características Técnicas](#características-técnicas)
5. [Instalación y Uso](#instalación-y-uso)

---

## 📖 Contexto del Proyecto

**GlobalMarket** es una startup de comercio electrónico en expansión que enfrentaba problemas de rendimiento con su base de datos relacional debido a la variabilidad de atributos en sus productos y la carga de consultas complejas.

**Nuestra Solución:**
Migrar la infraestructura a **MongoDB Atlas**, implementando:
*   Un modelo de datos híbrido (Referencing + Embedding).
*   Validación de esquemas estricta (Schema Validation).
*   Motor de búsqueda semántica (Atlas Search).
*   Pipelines de agregación para Business Intelligence (BI).

---

## 💾 Fuente de Datos

El dataset utilizado es el **Amazon Sales Dataset**, que contiene transacciones y metadatos de productos reales.
*   **Origen:** [Kaggle - Amazon Sales Dataset](https://www.kaggle.com/datasets/karkavelrajaj/amazon-sales-dataset)
*   **Procesamiento:** Los datos fueron limpiados (conversión de tipos monetarios, eliminación de caracteres especiales) y normalizados antes de la ingesta.

---

## 📂 Estructura del Repositorio

El proyecto consta de los siguientes scripts clave:

### 1. `validation.js` 🛡️
Contiene las reglas de validación **JSON Schema** aplicadas a las colecciones.
*   Asegura la integridad de los datos (ej. precios positivos, rangos de rating 0-5).
*   Define la estructura obligatoria para productos y reseñas.

### 2. `queries.js` 📊
Colección de **Pipelines de Agregación** complejos diseñados para extraer insights de negocio:
*   **Reporte de Ventas:** Proyección de ingresos por categoría y mes.
*   **Top Productos:** Filtro de calidad vs. cantidad (Rating > 4.0 & Reviews > 50).
*   **Bucket Pattern:** Segmentación automática de precios (Económico, Estándar, Premium).

### 3. `autocopmlete.js` 🔍
*(Nota: Configuración de Atlas Search)*
Define el índice de búsqueda basado en **Lucene** para habilitar funcionalidades de:
*   Autocompletado.
*   Búsqueda difusa (*Fuzzy Search*) para tolerar errores tipográficos en el nombre del producto.

### 4. `benchmark.js` ⚡
Scripts utilizados para las pruebas de rendimiento y optimización.
*   Comparativa de tiempos de respuesta.
*   Análisis de **Explain Plans** (COLLSCAN vs IXSCAN) antes y después de la creación de índices compuestos.

---

## 🛠️ Características Técnicas

### Modelado de Datos
*   **Colección `products`:** Almacena el catálogo maestro.
*   **Colección `reviews`:** Separada para evitar el límite de 16MB por documento (Patrón *Referencing*).
*   **Objeto `user`:** Embebido dentro de cada reseña para optimizar la lectura del perfil del autor (Patrón *Embedding*).

### Agregaciones
Uso avanzado del Framework de Agregación de MongoDB:
*   `$lookup` & `$unwind` para joins eficientes.
*   `$bucketAuto` para análisis estadístico.
*   `$project` con lógica condicional (`$switch`) para transformación de datos.

### Visualización
Los resultados de las agregaciones alimentan un Dashboard en **MongoDB Charts** que monitorea:
*   Ingresos estimados por categoría.
*   Matriz de dispersión (Popularidad vs Precio).
*   Distribución de calidad del inventario.

---

## 🚀 Instalación y Uso

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/diorgelysglod-bot/Mongodb.git
    cd Mongodb
    ```

2.  **Requisitos:**
    *   Cuenta en MongoDB Atlas (Cluster M0 o superior).
    *   MongoDB Compass instalado.

3.  **Ingesta:**
    Importar el dataset (CSV/JSON) a la base de datos `GlobalMarket`.

4.  **Ejecución:**
    Copiar y pegar el contenido de `validation.js` en la pestaña *Validation* de Atlas y ejecutar las consultas de `queries.js` en la barra de *Aggregations* de Compass.


