---
title: "Time Series Forecasting with LSTM"
publishedAt: 2024-12-24
description: "LSTM networks for forecasting airline passenger counts using time series data."
slug: "time-series-analysis"
isPublish: true
---

## Time Series Forecasting with LSTM

In this post, we will delve into the application of **Long Short-Term Memory (LSTM)** networks for **time series forecasting**, specifically predicting future airline passenger counts based on historical data. LSTM, a specialized variant of Recurrent Neural Networks (RNNs), excels at handling sequential data by capturing long-term dependencies in time series. This makes it highly effective for tasks such as forecasting, where patterns evolve over time and past data points influence future predictions.

The dataset we will use for this project is the **Airline Passengers dataset**, which provides monthly counts of international airline passengers between 1949 and 1960. Time series forecasting plays a critical role in airline operations, helping companies predict demand, allocate resources effectively, and optimize pricing. For example, accurately predicting passenger traffic enables airlines to adjust their schedules, improve customer satisfaction, and manage operational costs efficiently.

Before building the LSTM model, the dataset must be preprocessed. Time series data is typically non-stationary, meaning its statistical properties such as mean and variance change over time. This makes it necessary to scale the data to a consistent range, which can be achieved using normalization techniques like **MinMax Scaling**. Scaling transforms all values to fall within a specific range, typically between 0 and 1, making it easier for the model to learn from the data.

```python
from sklearn.preprocessing import MinMaxScaler

# Scale the dataset to range [0, 1]
scaler = MinMaxScaler(feature_range=(0, 1))
dataset_scaled = scaler.fit_transform(dataset)
```

Once the data is scaled, we split it into **training** and **testing** sets. The training set is used to build and train the model, while the testing set evaluates its performance. Additionally, since LSTM models expect data in a specific format, we reshape the dataset into sequences of values where each input (X) consists of a window of previous data points used to predict the next value (Y). This is where the concept of **look-back** comes into play: it defines how many previous months of data the model should consider when making a prediction.

```python
def create_dataset(dataset, look_back=1):
    dataX, dataY = [], []
    for i in range(len(dataset) - look_back - 1):
        a = dataset[i:(i + look_back), 0]
        dataX.append(a)
        dataY.append(dataset[i + look_back, 0])
    return numpy.array(dataX), numpy.array(dataY)
```

The next step is constructing the **LSTM model**. The LSTM network is designed to learn patterns from sequential data, making it a perfect fit for time series forecasting. The LSTM layer helps the model remember important information from past time steps, while the Dense layer produces the final prediction. The model is trained using **mean squared error** (MSE) as the loss function and **Adam optimizer**, which adjusts the model’s weights during training to minimize the error.

```python
from keras.models import Sequential
from keras.layers import LSTM, Dense

# Build the LSTM model
model = Sequential()
model.add(LSTM(4, input_shape=(1, look_back)))
model.add(Dense(1))
model.compile(loss='mean_squared_error', optimizer='adam')
model.fit(trainX, trainY, epochs=100, batch_size=1, verbose=2)
```

After training, we evaluate the model’s performance by making predictions on both the training and testing datasets. The predicted values are then inverse-transformed back to their original scale, allowing us to compare them to the actual values. We assess the model's accuracy using **Root Mean Squared Error (RMSE)**, a common metric for time series forecasting, which measures the average difference between predicted and actual values. By visualizing the predicted and actual values on a graph, we can gain insights into how well the model captures the underlying trends in the data.

LSTM networks provide a powerful tool for time series forecasting by learning from historical data and predicting future values. This approach is widely applicable in industries where predicting trends is essential for decision-making, such as finance, retail, and healthcare. By fine-tuning the model and exploring additional features or advanced architectures, we can improve forecasting accuracy and create even more robust predictive models for real-world applications.
