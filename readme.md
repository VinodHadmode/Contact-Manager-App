
### Contact Manager App

#### Overview
The **Contact Manager App** is a full-stack application built using the MERN stack. It allows users to manage their contacts effectively with various features like viewing, adding, editing, deleting, and searching contacts.

#### Features

- **Contact List**: Displays a list of all saved contacts with name, mobile, and email.
- **Add Contact**: Allows adding a new contact with details like name, mobile, email, company, title, group, and photo.
- **View Contact Details**: View complete details of a contact, including name, mobile, email, company, title, group, and profile picture.
- **Edit Contact**: Update an existing contact's details.
- **Delete Contact**: Remove a contact from the list.
- **Search Functionality**: Search contacts by name using a search bar.

#### Technologies Used
- **Frontend:** React.js
- **Backend:** json-server
- **styling:** Bootstrap
- **Icons:** React Icons

#### Installation and Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/contact-manager-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd contact-manager-app
   ```
3. Install the dependencies for both frontend and backend:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open your browser and navigate to `http://localhost:3000` to use the app.

6. Install & start the json-server:
   ```bash
   json-server --watch db.json --port 3000
   ```


#### Usage
- To add a contact, click on the "New" button on the Contact List page.
- Use the search bar to filter contacts by name.
- View,Edit or delete contacts using the buttons provided in the contact details view.

#### Screenshots

### Contact List Page
![Contact List](/frontend/src/assets/contact-list.JPG)

### View Contact Page
![View Contact](/frontend/src/assets/view-contact.JPG)

### Add Contact Page
![Add Contact](/frontend/src/assets/add-contact.JPG)

### Edit Contact Page
![Edit Contact](/frontend/src/assets/edit-contact.JPG)
