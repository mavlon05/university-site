import { useState } from "react";
import { useTranslation } from "react-i18next";

function InputPage() {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const isValidPhone = (phone) => {
    const phoneRegex = /^[\d\s()+-]{7,}$/;
    return phoneRegex.test(phone);
  };

  const sendMessage = async () => {
    if (!name.trim()) {
      alert("❌ " + t("Input.errorName"));
      return;
    }
    if (!isValidEmail(contact) && !isValidPhone(contact)) {
      alert("❌ " + t("Input.errorContact"));
      return;
    }
    if (!message.trim()) {
      alert("❌ " + t("Input.errorMessage"));
      return;
    }

    try {
      const botToken = "7463755151:AAEGdRW2PrKVoW9JzqhuLb020T----nplVY"; // 🔹 O'zingning bot tokeningni yoz
      const chatId = "6402351958"; // 🔹 O'zingning Telegram chat ID'ni yoz
      const text = `📝 Yangi habar:\n👤 Ism: ${name}\n📞 Aloqa: ${contact}\n💬 Xabar: ${message}`;

      const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
      
      await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text: text }),
      });

      alert("✅ " + t("Input.success"));
      setName("");
      setContact("");
      setMessage("");
    } catch (error) {
      alert(t("Input.fail"));
      console.error("Botga habar yuborishda xatolik:", error);
    }
  };

  return (
    <div className="flex items-center mt-28 justify-center h-auto px-4">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 sm:w-[400px] md:w-[450px] lg:w-[500px] p-8 rounded-2xl shadow-2xl w-[350px] space-y-6 border border-gray-700">
        <h1 className="text-3xl font-bold text-white text-center">{t("Input.h1")}</h1>

        <div className="space-y-2">
          <label className="text-lg font-semibold text-gray-300" htmlFor="name">{t("Input.h2")}</label>
          <input
            className="w-full h-12 rounded-lg px-4 bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all shadow-md"
            type="text"
            id="name"
            placeholder={t("Input.h3")}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label className="text-lg font-semibold text-gray-300" htmlFor="contact">{t("Input.h4")}</label>
          <input
            className="w-full h-12 rounded-lg px-4 bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all shadow-md"
            type="text"
            id="contact"
            placeholder={t("Input.h5")}
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label className="text-lg font-semibold text-gray-300" htmlFor="message">{t("Input.h6")}</label>
          <textarea
            className="w-full h-24 rounded-lg px-4 bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all shadow-md"
            id="message"
            placeholder={t("Input.h7")}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <button
          onClick={sendMessage}
          className="w-full h-12 flex items-center justify-center gap-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all shadow-lg active:scale-95"
        >
          {t("Input.btn")}
        </button>
      </div>
    </div>
  );
}

export default InputPage;
