"use client";
import Link from "next/link";
import { useState } from "react";
import {
  FaShoppingCart,
  FaSignInAlt,
  FaStore,
  FaInfoCircle,
  FaPhoneAlt,
  FaFileInvoice,
  FaBars,
  FaTimes,
  FaSignOutAlt,
} from "react-icons/fa";
import Modal from "../Modal";
import Input from "../Input";
import Button from "../Button";
import { Contact } from "lucide-react";
import toast from "react-hot-toast";

const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleLogin = () => {
    // Perform login logic here
    if (email !== "dummy@gmail.com" && password !== "dummy") {
      toast.error("Username atau Password salah");
      return;
    }
    localStorage.setItem("token", "abc");
    toast.success("Login Berhasil");
    setTimeout(() => {
      window.location.reload();
    }, 500);
    closeModal();
  };

  return (
    <header className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex items-center">
            <Link href="/">
              <span className="text-2xl md:text-3xl font-extrabold text-amber-700 tracking-wide">
                Zeltho
              </span>
            </Link>
          </div>
          <div className="flex items-center space-x-4 md:space-x-6">
            <Link href="/terms-and-conditions" className="hidden sm:flex">
              <span className="flex items-center text-sm md:text-lg text-gray-800 hover:text-amber-700 transition duration-300 ease-in-out">
                Terms & Condition
              </span>
            </Link>
            <Link href="/contact" className="hidden sm:flex">
              <span className="flex items-center text-sm md:text-lg text-gray-800 hover:text-amber-700 transition duration-300 ease-in-out">
                <Contact className="mr-2" />
                Contact
              </span>
            </Link>
            <Link href="/transaction" className="hidden sm:flex">
              <span className="flex items-center text-sm md:text-lg text-gray-800 hover:text-amber-700 transition duration-300 ease-in-out">
                <FaFileInvoice className="mr-2" />
                Transaction
              </span>
            </Link>
            <Link href="/cart" className="hidden sm:flex">
              <span className="flex items-center text-sm md:text-lg text-gray-800 hover:text-amber-700 transition duration-300 ease-in-out">
                <FaShoppingCart className="mr-2" />
                Cart
              </span>
            </Link>
            {window?.localStorage?.getItem("token") ? (
              <>
                <button
                  className=" hidden sm:flex items-center px-3 md:px-4 py-2 bg-amber-700 text-white rounded-full hover:bg-amber-800 transition duration-300 ease-in-out"
                  onClick={() => {
                    localStorage.clear();
                    toast.success("Berhasil logout");
                    setTimeout(() => {
                      window.location.reload();
                    }, 300);
                  }}
                >
                  <FaSignOutAlt className="mr-2" />
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  className=" hidden sm:flex items-center px-3 md:px-4 py-2 bg-amber-700 text-white rounded-full hover:bg-amber-800 transition duration-300 ease-in-out"
                  onClick={openModal}
                >
                  <FaSignInAlt className="mr-2" />
                  Sign In
                </button>
              </>
            )}
            <button
              className="md:hidden text-amber-700 focus:outline-none"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg absolute w-full top-16 left-0">
          <Link href="/transaction">
            <span className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
              Transaction
            </span>
          </Link>
          <Link href="/cart">
            <span className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
              Cart
            </span>
          </Link>
        </nav>
      )}
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Login">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <div className="space-y-4">
            <Input
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
            <Input
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="flex justify-end mt-4">
            <Button onClick={handleLogin}>Login</Button>
          </div>
        </form>
      </Modal>
    </header>
  );
};

export default Header;
