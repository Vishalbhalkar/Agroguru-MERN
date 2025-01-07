# AgroGuru - Empowering Farmers with Crop Prediction and Agricultural Information

AgroGuru is a comprehensive web application developed using the MERN (MongoDB, Express, React, Node.js) stack. It aims to assist farmers by providing accurate crop predictions through Machine Learning, delivering real-time weather information, and offering resources such as nearby laboratories, markets, and nurseries to make informed decisions.

---

## Features

- **Crop Prediction**: Utilizes Machine Learning algorithms to predict optimal crops based on various factors.
- **Weather Information**: Real-time weather updates and forecasts for better agricultural planning.
- **User Roles**: Supports different user roles - farmers and crop sellers - with tailored features.
- **Location-based Information**: Provides details about nearby laboratories, markets, and nurseries.
- **Database Integration**: Stores user data, predictions, and other essential information using MongoDB.

---

## Tech Stack

- **Frontend**: React.js with JavaScript for interactive user interfaces.
- **Backend**: Node.js and Express.js for server-side logic and APIs.
- **Database**: MongoDB for efficient data storage and retrieval.
- **Machine Learning**: ML algorithms for crop prediction.
- **Weather Data**: Integration with weather APIs for real-time weather information.

---

## Getting Started

Follow these steps to set up the project on your local machine:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Vishalbhalkar/Agroguru-MERN.git
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd AgroGuru
   ```

3. **Install Dependencies**:
   Install the required dependencies for both frontend and backend:

   ```bash
   npm install
   ```

4. **Configure MongoDB Connection**:
   Update the database configuration in `server/config/config.js` with your MongoDB credentials.

5. **Start the Backend Server**:

   ```bash
   npm run server
   ```

6. **Start the Frontend Development Server**:

   ```bash
   npm run client
   ```

7. **Access the Application**:
   Open your web browser and navigate to:

   ```
   http://localhost:3000
   ```

---

## Usage

- **Registration & Login**:
  - Farmers and sellers can register and log in with appropriate roles.
- **Crop Predictions**:
  - Farmers can input various parameters to get crop predictions.
- **Weather Updates**:
  - Real-time weather updates are displayed on the dashboard.
- **Nearby Resources**:
  - Users can explore nearby laboratories, markets, and nurseries.
- **Data Storage**:
  - All data is securely stored in the MongoDB database for easy retrieval.

---

## Contributing

Contributions are welcome! If you have suggestions for improvements or find any issues, feel free to open an issue or submit a pull request.

---

AgroGuru empowers farmers with crop prediction using Machine Learning, real-time weather information, and essential agricultural resources. Built with the MERN stack, it is designed to make agricultural decision-making easier and more effective.

