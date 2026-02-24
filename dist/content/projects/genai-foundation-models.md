## Technical Deep Dive
This project serves as a laboratory for low-level implementations of the architectures defining the current AI era. Moving away from high-level wrappers, it focuses on the fundamental math and structural logic of foundation models.

### Core Implementations
* **Vanilla Transformer**: A complete from-scratch implementation of the "Attention is All You Need" architecture. It includes custom implementations of scaled dot-product attention, multi-head attention, and sinusoidal positional embeddings, trained on the Tiny Shakespeare dataset to understand character-level linguistic patterns.
* **Generative Adversarial Networks (GANs)**: Developed a deep convolutional GAN (DCGAN) on the CIFAR-10 dataset. The project involved fine-tuning the adversarial balance between the generator and discriminator, overcoming common hurdles like mode collapse and vanishing gradients.
* **MLOps Integration**: Each model is tracked using experiment versioning, with automated scripts for training checkpoints and performance visualization, providing a clear window into the learning dynamics of deep neural networks.