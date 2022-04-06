import Header from "./Header";

const Layout = ({ children }) => {
  return <div className="w-full">
    <Header />
    {children}
  </div>
}

export default Layout;