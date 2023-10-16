const getUsers = async () => {
  try {
    const response = await fetch("/src/users.json"); 
    const data = await response.json();
    return data.users;
  } catch (error) {
    console.error("Gagal membaca data JSON:", error);
    return [];
  }
};

export { getUsers };
