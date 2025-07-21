import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2 } from "lucide-react";
import { sendEmail } from "@/utils/email";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  name: z.string().min(2, "Naam moet minimaal 2 karakters bevatten"),
  email: z.string().email("Vul een geldig e-mailadres in"),
  phone: z.string().min(10, "Vul een geldig telefoonnummer in"),
  message: z.string().min(10, "Bericht moet minimaal 10 karakters bevatten"),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      await sendEmail({
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
      });
      
      toast.success('Bericht succesvol verzonden! We nemen zo spoedig mogelijk contact met u op.');
      reset();
      
      setTimeout(() => {
        navigate('/tot-snel');
      }, 1000);
    } catch (error) {
      console.error("Error sending form:", error);
      toast.error('Er is iets misgegaan bij het versturen van uw bericht. Probeer het later opnieuw.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Toaster position="top-center" />
      <section id="contact" className="bg-white py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Neem contact met ons op
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Vraag een vrijblijvende offerte aan of stel uw vragen
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-xl">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Naam
              </label>
              <input
                type="text"
                id="name"
                {...register("name")}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                E-mail
              </label>
              <input
                type="email"
                id="email"
                {...register("email")}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Telefoonnummer
              </label>
              <input
                type="tel"
                id="phone"
                {...register("phone")}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Bericht
              </label>
              <textarea
                id="message"
                rows={4}
                {...register("message")}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.message.message}
                </p>
              )}
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Verzenden...
                  </>
                ) : (
                  "Verstuur bericht"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
    </>
  );
}