## System Architecture
This Asynchronous TaskManager is designed for high-throughput data processing where latency and reliability are critical. It demonstrates a robust distributed system architecture capable of handling long-running scraping and analysis tasks.

### Technical Capabilities
* **Distributed Processing**: Utilizes **Celery** and **Redis** to decouple the API request-response cycle from heavy processing tasks. This allows the system to serve JSON responses to over 1,000 active users without blocking the main event loop.
* **Autonomous Web Scraping**: Integrated **Selenium** and **BeautifulSoup** for complex data extraction from dynamic websites, handling JavaScript-heavy content and session management.
* **GenAI Insights & MCP**: Beyond simple scraping, the system uses GenAI to perform sentiment analysis and summarization on the extracted data. It integrates with a **Model Context Protocol (MCP)** server, allowing for a chatbot interface that can query the live database and provide contextual insights to the user.
* **Resiliency**: Implemented comprehensive retry logic, rate limiting, and task monitoring to ensure data integrity across thousands of asynchronous jobs.