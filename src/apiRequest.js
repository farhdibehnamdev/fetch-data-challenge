export const apiRequest = async function (
  url = "",
  optionsObj = null,
  errMsg = null
) {
  try {
    const response = await fetch(url, optionsObj);
    if (!response.ok) throw Error("Something went wrong...");
    const data = await response.json();
    return data;
  } catch (err) {
    return err.message;
  }
};
