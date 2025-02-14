const apiFetch = async (path, method = "GET", body) => {
  try {
    const api = await fetch(`https://vercel-api-olive.vercel.app/${path}`, {
      method: `${method}`,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const response = await api.json();

    const data = await response;
    console.log(data);
  } catch (error) {
    throw new Error("Error fetching data: ", error);
  }
};

export default apiFetch;
