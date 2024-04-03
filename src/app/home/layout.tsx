const RootLayout = ({children}: Readonly<{children: React.ReactNode}>) => {
  return(
    <>
        <h1>Navbar</h1>
        {children}
    </>
  );
};

export default RootLayout;