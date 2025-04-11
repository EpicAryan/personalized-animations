import { Sidebar } from "@/component";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex">
          <Sidebar />
          <main className="px-4 ml-64 w-full"> 
                {children}
            </main>
        </div>
    );
}
