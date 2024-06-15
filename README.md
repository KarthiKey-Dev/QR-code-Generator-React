
## QR Code Generator with Editable Form

### Project Description

This project is a React-based web application that allows users to input their personal information (Name, City, Country) and generate a QR code based on the provided data. The application uses Material-UI for styling and components, including text fields and buttons, along with react-hook-form for form handling. Additionally, the QR code is generated using the `react-qr-code` library.

### Features

1. **Form Input**: Users can enter their Name, City, and Country into text fields.
2. **QR Code Generation**: Upon submitting the form, a QR code is generated based on the entered data.
3. **Form and QR Code State Management**:
   - Once the QR code is generated, the form fields and submit button are disabled to prevent further edits.
   - An "Edit" button is provided to re-enable the form fields, allowing users to update their information. When editing, the QR code is hidden.
4. **Styled Components**: Utilizes Material-UI's styled components for a consistent and modern look and feel.

### Technologies Used

- **React**: For building the user interface and managing state.
- **Material-UI**: For UI components and styling.
- **react-qr-code**: For generating QR codes from user input.

### How It Works

1. **User Input**: The user enters their Name, City, and Country into the respective text fields.
2. **Form Submission**: When the user submits the form, the entered data is used to generate a QR code.
3. **State Management**: The form fields and submit button are disabled after the QR code is generated to prevent further edits. The QR code is displayed to the user.
4. **Editing**: The user can click the "Edit" button to enable the form fields again and hide the QR code, allowing them to update their information and generate a new QR code.

This project demonstrates the integration of various modern web development technologies to create an interactive and user-friendly application.

