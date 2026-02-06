## Retrieval-Augmented Generation

An advanced RAG pipeline combining MiniLM embeddings, FAISS vector store, and GPT-2 for context-aware text generation.

### Components

1.  **MiniLM Embeddings**: Efficient semantic text embeddings for document indexing.
2.  **FAISS Vector Store**: High-performance similarity search across large document collections.
3.  **GPT-2 Generation**: Context-conditioned text generation for improved responses.

### Workflow

Documents are indexed using MiniLM embeddings and stored in FAISS. User queries retrieve relevant context, which is then fed to GPT-2 for generating informed responses.

### Applications

This approach significantly improves response quality by grounding generation in retrieved factual information, reducing hallucinations common in pure language models.
