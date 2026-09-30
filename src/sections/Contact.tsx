import { useState, type ChangeEvent, type FormEvent } from "react";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const INITIAL_VALUES: FormValues = {
  name: "",
  email: "",
  message: "",
};

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  const trimmedName = values.name.trim();
  if (!trimmedName) {
    errors.name = "Please enter your name.";
  } else if (trimmedName.length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  const trimmedEmail = values.email.trim();
  if (!trimmedEmail) {
    errors.email = "Please enter your email address.";
  } else if (!EMAIL_PATTERN.test(trimmedEmail)) {
    errors.email = "Please enter a valid email address.";
  }

  const trimmedMessage = values.message.trim();
  if (!trimmedMessage) {
    errors.message = "Please write a short message.";
  } else if (trimmedMessage.length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }

  return errors;
}

export default function Contact() {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormValues, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    const nextValues = { ...values, [name]: value };
    setValues(nextValues);

    if (touched[name as keyof FormValues]) {
      setErrors(validate(nextValues));
    }
  };

  const handleBlur = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = event.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validate(values));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setTouched({ name: true, email: true, message: true });

    if (Object.keys(validationErrors).length > 0) {
      setStatus("idle");
      return;
    }

    // No backend is wired up for this internship deliverable —
    // this simulates a successful submission for the UI/validation task.
    setStatus("success");
    setValues(INITIAL_VALUES);
    setTouched({});
    setErrors({});
  };

  const isSubmitDisabled =
    !values.name.trim() || !values.email.trim() || !values.message.trim();

  return (
    <section id="contact" className="bg-ink-800/40 py-24">
      <div className="section-shell grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
        <div>
          <span className="section-eyebrow">Contact</span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Let&apos;s work together
          </h2>
          <p className="mt-4 max-w-md text-slate-400">
            Have an internship opportunity, a project idea, or feedback on my
            work? Send a message and I&apos;ll get back to you.
          </p>

          <ul className="mt-8 space-y-4 text-sm text-slate-400">
            <li className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-brand-300">
                @
              </span>
              priyajit.paul@example.com
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-brand-300">
                ↗
              </span>
              Open to internship & freelance frontend work
            </li>
          </ul>
        </div>

        <form
          noValidate
          onSubmit={handleSubmit}
          className="card space-y-5"
          aria-describedby={status === "success" ? "form-success" : undefined}
        >
          {status === "success" && (
            <p
              id="form-success"
              role="status"
              className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-300"
            >
              Thanks! Your message has been sent successfully.
            </p>
          )}

          <div>
            <label htmlFor="name" className="field-label">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
              className="field-input"
              placeholder="Your full name"
            />
            {errors.name && (
              <p id="name-error" className="field-error">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="field-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              className="field-input"
              placeholder="you@example.com"
            />
            {errors.email && (
              <p id="email-error" className="field-error">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="field-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
              className="field-input resize-none"
              placeholder="Tell me a bit about the opportunity or project..."
            />
            {errors.message && (
              <p id="message-error" className="field-error">
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitDisabled}
            className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
