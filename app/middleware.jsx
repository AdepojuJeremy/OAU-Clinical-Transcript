//TODO: Create functionality of protected routes

// import { NextResponse } from 'next/server';

// export function middleware() {
//   // Retrieve the token from cookies
//   const token = req.cookies.get('token');
//   console.log(token);

//   // Exclude login and root route from protection
//   const excludedRoutes = ['/login', '/'];
//   const currentRoute = new URL(req.url);

//   // Redirect unauthenticated users except for excluded routes
//   if (!token && !excludedRoutes.includes(currentRoute.pathname)) {
//     return NextResponse.redirect(new URL('/login', req.url));
//   }

//   // Allow access for authenticated users or login/root route
//   return NextResponse.next();
// }
