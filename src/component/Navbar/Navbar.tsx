// filepath: src/components/Navbar.tsx
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="bg-gray-900">
            <div className="container mx-auto text-white p-4 flex items-center justify-between">
                <div className="text-xl font-bold">Personalized Animations</div>
                <div className="">
                    <Link
                        href="/components"
                        className="px-2 py-1 rounded-sm hover:text-gray-300 hover:border-1 hover:border-gray-300"
                    >
                        Components
                    </Link>
                </div>
                <div className="flex space-x-6">
                    <Link href="/#about" className="hover:text-gray-300">
                        About
                    </Link>
                    <Link href="/#section" className="hover:text-gray-300">
                        Section
                    </Link>
                    <Link href="/#contact" className="hover:text-gray-300">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
