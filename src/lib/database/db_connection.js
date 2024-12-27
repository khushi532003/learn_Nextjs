const username = process.env.myusername
const password = process.env.mypassword

if (!username || !password) {
    throw new Error("Missing MongoDB Credentials")
}

export const connectionString = `mongodb+srv://khushi:${password}@cluster0.ybguy.mongodb.net/employee?retryWrites=true&w=majority&appName=Cluster0`