📚 **Blogs API – Backend**
A lightweight RESTful API built with Node.js and Express, designed for creating and retrieving blog posts.
Currently, it supports basic CRUD features (Create & Read) with MySQL as the database. The project is in an early stage, with planned features like category management, user authentication, and more.

🚀 **Features (Current)**
1. **Create Blog** – Add a new blog post with title, cover image, and content.
2. **Get Blogs** – Fetch all blog posts from the database.
3. **Image Upload Support** – Blogs can include an embedded image stored with size validation.
4. **MySQL Integration** – Persistent storage with MySQL database.
5. **File Size Restriction** – Maximum upload size is limited to 1 MB to optimize performance and avoid oversized uploads.

📦 **Tech Stack**
- **Backend Framework**: Node.js + Express
- **Database**: MySQL
- **File Handling**: Multer (for image uploads)
- **Hosting**: Railway
- **Environment Variables**: Managed via .env file

🔧 **Installation & Setup**
1. **Clone the repository**

```bash

git clone https://github.com/your-username/blogs-api.git
cd blogs-api

```
2. **Install dependencies**

```bash

npm install

```
3. **Create a .env file in the root directory:**

```env

DB_HOST=your_mysql_host
DB_USER=your_mysql_username
DB_PASS=your_mysql_password
DB_NAME=your_mysql_database

```
4. **Run the server locally**

```bash

npm start

```
By default, it runs on:

```arduino

http://localhost:4000

```
📡 **API Endpoints**
**Method**	**Endpoint**	**Description**            **Request Body**
POST	/create	    Create a new blog post	{ title, coverImage, content, createdAt }
GET	    /getBlogs	Fetch all blog posts	–

⚠ **Limitations (Current)**
- **Only Create and Read** operations are available (no Update/Delete yet).
- **No category system** – all blogs are stored without categorization.
- **No authentication** – open API (security layer planned).
- **Image size limit** – 1 MB max.

🛠 **Planned Features**
✅ Update & Delete blog posts
✅ Categories (Many-to-Many relationship with blogs)
✅ User authentication & authorization
✅ Search & filtering
✅ Cloud storage for images (e.g., Cloudinary)

🌐 **Deployment**
The API is hosted on Railway:

```arduino

https://blogs-api-production-c607.up.railway.app/

```
Example create request:

```bash

POST https://blogs-api-production-c607.up.railway.app/create

```
🤝 **Contributing**
Contributions, feature requests, and bug reports are welcome!
Please open an issue or submit a pull request.

📄 **License**
This project is licensed under the MIT License – feel free to use it for your own projects.
