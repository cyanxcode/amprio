"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function WhatsApp() {
  return (
    <>
      <Link href="https://wa.me/919350471371" target="_blank">
        <motion.div
          className="fixed bottom-7 right-7 w-16 h-16"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src="/Whatsapp2.png"></img>
        </motion.div>
      </Link>
    </>
  );
}
