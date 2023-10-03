import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex">
        <div className="flex flex-row min-w-full overflow-hidden max-h-screen">
          <div className="w-60">
            <Sidebar />
          </div>

          <div className="flex flex-col flex-1">
            <div className="">
              <Header />
            </div>
            <main className="flex-1 overflow-y-auto">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
