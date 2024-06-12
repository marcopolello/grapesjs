const getXMLDoc = async () => {
  try {
    const response = await fetch('src/store/data.xml');
    const xmlString = await response.text();
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, 'application/xml');
    return xmlDoc;
  } catch (error) {
    console.error('Error reading XML:', error);
    throw error;
  }
};

export const getXMLData = getXMLDoc;
