export function transformAcademicSession(session) {
    // Splitting the session into two parts based on "/"
    const parts = session.split('/');
    
    if (parts.length !== 2) {
      // Handling unexpected input
      return session;
    }
    
    // Extracting the last two digits of each part
    const firstPart = parts[0].slice(-2);
    const secondPart = parts[1].slice(-2);
    
    // Combining and returning the transformed format
    return `${firstPart}/${secondPart}`;
  }
  

 
  