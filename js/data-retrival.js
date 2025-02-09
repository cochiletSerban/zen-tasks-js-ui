const apiUrl = "http://localhost:3000/";

export async function getAllTodos() {
  const response = await fetch(apiUrl + "todos");
  return await response.json();
}
