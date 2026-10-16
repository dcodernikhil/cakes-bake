
import { useState } from "react";
import {
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
  FaHeart,
  FaInstagram,
  FaRegClock,
} from "react-icons/fa";

const Contact = () => {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
  const email = import.meta.env.VITE_BUSINESS_EMAIL;
  const location = import.meta.env.VITE_BUSINESS_LOCATION;
  const instagram = import.meta.env.VITE_INSTAGRAM_URL;

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    enquiryType: "Custom Cake",
    occasion: "",
    date: "",
    message: "",
  });

  const [error, setError] = useState("");

  const updateForm = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!whatsappNumber) {
      setError(
        "WhatsApp ordering is not configured yet. Please contact us using the details below."
      );
      return;
    }

    const message = [
      "Hello Cakes & Bake! ♡",
      "",
      "I'd love to make an enquiry.",
      "",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || "Not provided"}`,
      `Enquiry: ${form.enquiryType}`,
      `Occasion: ${form.occasion || "Not specified"}`,
      `Preferred date: ${form.date || "Flexible"}`,
      "",
      "My requirements:",
      form.message,
      "",
      "Please share availability and pricing. Thank you!",
    ].join("\n");

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  const contactMethods = [
    {
      icon: FaWhatsapp,
      title: "WhatsApp Us",
      description: "Chat with us about your next sweet treat.",
      action: whatsappNumber
        ? `https://wa.me/${whatsappNumber}`
        : null,
      label: "Start a conversation",
    },
    {
      icon: FaEnvelope,
      title: "Send an Email",
      description: email || "Have a question? We'd love to hear from you.",
      action: email ? `mailto:${email}` : null,
      label: "Write to us",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Find Our Bakery",
      description: location || "Get in touch to confirm our location.",
      action: location
        ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            location
          )}`
        : null,
      label: "View location",
    },
  ];

  return (
    <main className="overflow-hidden bg-background">
      {/* Hero */}
      <section className="px-4 pb-12 pt-5 sm:px-6 sm:pb-16 sm:pt-7 lg:px-10 lg:pb-20">
        <div className="relative mx-auto max-w-[1600px] overflow-hidden rounded-[1.5rem] sm:rounded-[2rem]">
          <div className="relative min-h-[400px] sm:min-h-[490px] lg:min-h-[540px]">
            <img
              src="https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=2000&q=85"
              alt="Delicate dessert prepared for a special occasion"
              fetchPriority="high"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#241B19]/80 via-[#241B19]/45 to-[#241B19]/10" />

            <div className="relative flex min-h-[400px] flex-col justify-center px-6 py-12 sm:min-h-[490px] sm:px-12 lg:min-h-[540px] lg:px-20">
              <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/85 sm:text-sm">
                <FaHeart className="text-primary" />
                We'd love to hear from you
              </span>

              <h1 className="mt-5 max-w-3xl font-heading text-5xl font-semibold leading-[1.05] text-white sm:text-6xl md:text-7xl lg:text-8xl">
                Let's Talk
                <span className="block italic text-[#F0C9C5]">
                  Something Sweet.
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:mt-7 sm:text-lg md:text-xl">
                Planning a celebration, dreaming up a custom
                cake, or simply craving something delicious?
                We're just a message away.
              </p>

              <a
                href="#send-enquiry"
                className="mt-8 inline-flex min-h-12 w-fit items-center gap-3 rounded-full bg-background px-7 py-3.5 font-semibold text-text transition hover:-translate-y-0.5 hover:bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-text"
              >
                Send an Enquiry
                <FaArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact methods */}
      <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary sm:text-sm">
              Here for the Sweet Stuff
            </span>
            <h2 className="mt-3 font-heading text-4xl font-semibold text-text sm:text-5xl">
              Get in Touch
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-muted">
              Choose whichever way feels easiest. We're happy
              to help you find the perfect treat.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {contactMethods.map((method) => {
              const Icon = method.icon;

              return (
                <article
                  key={method.title}
                  className="group rounded-2xl border border-border/80 bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:shadow-soft sm:p-8"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 text-secondary transition-colors group-hover:bg-secondary group-hover:text-white">
                    <Icon className="text-xl" />
                  </div>

                  <h3 className="mt-5 font-heading text-2xl font-semibold text-text sm:text-3xl">
                    {method.title}
                  </h3>

                  <p className="mt-2 min-h-12 break-words text-base leading-relaxed text-muted">
                    {method.description}
                  </p>

                  {method.action ? (
                    <a
                      href={method.action}
                      target={
                        method.action.startsWith("https://")
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        method.action.startsWith("https://")
                          ? "noreferrer"
                          : undefined
                      }
                      className="mt-5 inline-flex items-center gap-2 font-semibold text-secondary transition-colors hover:text-secondary-hover"
                    >
                      {method.label}
                      <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                    </a>
                  ) : (
                    <span className="mt-5 inline-flex items-center gap-2 text-sm text-muted">
                      <FaHeart className="text-primary" />
                      Details coming soon
                    </span>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enquiry form */}
      <section
        id="send-enquiry"
        className="bg-surface px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
      >
        <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* Left content */}
          <div className="lg:sticky lg:top-24">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary sm:text-sm">
              Tell Us What You're Dreaming Of
            </span>

            <h2 className="mt-4 font-heading text-4xl font-semibold leading-tight text-text sm:text-5xl md:text-6xl">
              Every Great
              <span className="block italic text-secondary">
                Cake Starts
              </span>
              With an Idea.
            </h2>

            <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted sm:text-xl">
              Share a few details with us. Whether it's a
              birthday cake, a thoughtful gift, or a simple
              question, we'll help you figure out the next step.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 text-secondary">
                  <FaHeart />
                </span>
                <div>
                  <p className="font-semibold text-text">
                    Personal attention
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted sm:text-base">
                    Tell us what you have in mind, and we'll
                    discuss your requirements.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 text-secondary">
                  <FaRegClock />
                </span>
                <div>
                  <p className="font-semibold text-text">
                    Planning ahead?
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted sm:text-base">
                    Include your preferred date so we can
                    discuss availability.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-9 hidden overflow-hidden rounded-2xl lg:block">
              <img
                src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=900&q=85"
                alt="A beautifully decorated celebration cake"
                loading="lazy"
                className="h-64 w-full object-cover"
              />
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-border/80 bg-background p-5 shadow-soft sm:p-8 lg:p-10">
            <div className="mb-7">
              <h3 className="font-heading text-3xl font-semibold text-text sm:text-4xl">
                Send an Enquiry
              </h3>
              <p className="mt-2 text-base leading-relaxed text-muted">
                Fill in the details below to prepare your
                message for WhatsApp.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-text"
                  >
                    Your name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={updateForm}
                    placeholder="Enter your name"
                    autoComplete="name"
                    required
                    maxLength={100}
                    className="min-h-12 w-full rounded-xl border border-border bg-surface px-4 py-3 text-base text-text outline-none transition placeholder:text-muted/70 focus:border-secondary focus:ring-2 focus:ring-primary/30"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-text"
                  >
                    Email address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={updateForm}
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    maxLength={254}
                    className="min-h-12 w-full rounded-xl border border-border bg-surface px-4 py-3 text-base text-text outline-none transition placeholder:text-muted/70 focus:border-secondary focus:ring-2 focus:ring-primary/30"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-text"
                  >
                    Phone number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={updateForm}
                    placeholder="Your contact number"
                    autoComplete="tel"
                    maxLength={25}
                    className="min-h-12 w-full rounded-xl border border-border bg-surface px-4 py-3 text-base text-text outline-none transition placeholder:text-muted/70 focus:border-secondary focus:ring-2 focus:ring-primary/30"
                  />
                </div>

                <div>
                  <label
                    htmlFor="enquiryType"
                    className="mb-2 block text-sm font-semibold text-text"
                  >
                    What can we help with? *
                  </label>
                  <select
                    id="enquiryType"
                    name="enquiryType"
                    value={form.enquiryType}
                    onChange={updateForm}
                    required
                    className="min-h-12 w-full rounded-xl border border-border bg-surface px-4 py-3 text-base text-text outline-none transition focus:border-secondary focus:ring-2 focus:ring-primary/30"
                  >
                    <option>Custom Cake</option>
                    <option>Birthday Cake</option>
                    <option>Bulk Order</option>
                    <option>Cakes &amp; Pastries</option>
                    <option>Donuts &amp; Cookies</option>
                    <option>General Enquiry</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="occasion"
                    className="mb-2 block text-sm font-semibold text-text"
                  >
                    Occasion
                  </label>
                  <input
                    id="occasion"
                    name="occasion"
                    value={form.occasion}
                    onChange={updateForm}
                    placeholder="Birthday, anniversary..."
                    maxLength={100}
                    className="min-h-12 w-full rounded-xl border border-border bg-surface px-4 py-3 text-base text-text outline-none transition placeholder:text-muted/70 focus:border-secondary focus:ring-2 focus:ring-primary/30"
                  />
                </div>

                <div>
                  <label
                    htmlFor="date"
                    className="mb-2 block text-sm font-semibold text-text"
                  >
                    Preferred date
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    value={form.date}
                    onChange={updateForm}
                    min={new Date().toLocaleDateString("en-CA")}
                    className="min-h-12 w-full rounded-xl border border-border bg-surface px-4 py-3 text-base text-text outline-none transition focus:border-secondary focus:ring-2 focus:ring-primary/30"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-text"
                >
                  Tell us a little more *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={updateForm}
                  placeholder="Cake flavour, size, design, quantity, budget, or any questions..."
                  rows={5}
                  required
                  minLength={5}
                  maxLength={1500}
                  className="w-full resize-y rounded-xl border border-border bg-surface px-4 py-3 text-base leading-relaxed text-text outline-none transition placeholder:text-muted/70 focus:border-secondary focus:ring-2 focus:ring-primary/30"
                />
              </div>

              {error && (
                <p
                  role="alert"
                  className="rounded-xl border border-secondary/30 bg-primary/10 p-3 text-sm leading-relaxed text-secondary"
                >
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="group inline-flex min-h-13 w-full items-center justify-center gap-3 rounded-full bg-secondary px-6 py-4 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-secondary-hover focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
              >
                <FaWhatsapp className="text-xl" />
                Prepare WhatsApp Enquiry
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </button>

              <p className="text-center text-xs leading-relaxed text-muted sm:text-sm">
                Your message will open in WhatsApp for you to
                review and send. This form does not submit or
                store your enquiry on a server.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Social CTA */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 text-secondary">
            <FaHeart className="text-xl" />
          </div>

          <h2 className="mt-5 font-heading text-3xl font-semibold text-text sm:text-4xl md:text-5xl">
            A little sweetness, every day.
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-lg leading-relaxed text-muted">
            Follow our baking journey and discover more
            little reasons to celebrate.
          </p>

          {instagram && (
            <a
              href={instagram}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-border bg-surface px-7 py-3.5 font-semibold text-secondary transition hover:border-secondary hover:bg-white focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
            >
              <FaInstagram className="text-lg" />
              Follow Our Journey
              <FaArrowRight />
            </a>
          )}
        </div>
      </section>
    </main>
  );
};

export default Contact;
