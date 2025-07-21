import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2 } from "lucide-react";
import { Helmet } from "react-helmet-async";

const formSchema = z.object({
  name: z.string().min(2, "Naam moet minimaal 2 karakters bevatten"),
  email: z.string().email("Vul een geldig e-mailadres in"),
  phone: z.string().min(10, "Vul een geldig telefoonnummer in"),
  city: z.string().min(2, "Stad moet minimaal 2 karakters bevatten"),
  message: z.string().min(10, "Bericht moet minimaal 10 karakters bevatten"),
});

type FormData = z.infer<typeof formSchema>;

const WEBHOOK_URL = "https://services.leadconnectorhq.com/hooks/k90zUH3RgEQLfj7Yc55b/webhook-trigger/54670718-ea44-43a1-a81a-680ab3d5f67f";

export default function ContactWebhookTest() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null);

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
    setSubmitResult(null);

    try {
      const webhookData = {
        data: {
          name: data.name,
          email: data.email,
          phone: data.phone,
          city: data.city,
          message: data.message
        }
      };

      console.log('Sending to webhook:', webhookData);

      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(webhookData)
      });

      const responseText = await response.text();
      console.log('Webhook response:', { status: response.status, body: responseText });

      if (response.ok) {
        setSubmitResult({ 
          success: true, 
          message: `Success! Status: ${response.status}. Response: ${responseText || 'OK'}` 
        });
        reset();
      } else {
        setSubmitResult({ 
          success: false, 
          message: `Failed! Status: ${response.status}. Response: ${responseText}` 
        });
      }
    } catch (error) {
      console.error("Webhook error:", error);
      setSubmitResult({ 
        success: false, 
        message: `Error: ${error instanceof Error ? error.message : 'Unknown error'}` 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <title>Webhook Test - Mitsubishi Airco Limburg</title>
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">
              GoHighLevel Webhook Test
            </h1>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
              <p className="text-sm text-yellow-800">
                <strong>Test Page Only:</strong> This page only sends data to the GoHighLevel webhook.
                No emails are sent via EmailJS.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-sm rounded-lg p-6 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
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
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
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
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
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
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                  Stad
                </label>
                <input
                  type="text"
                  id="city"
                  {...register("city")}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                />
                {errors.city && (
                  <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Bericht
                </label>
                <textarea
                  id="message"
                  rows={4}
                  {...register("message")}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
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
                      Sending to webhook...
                    </>
                  ) : (
                    "Test Webhook"
                  )}
                </button>
              </div>

              {submitResult && (
                <div className={`rounded-md p-4 ${submitResult.success ? 'bg-green-50' : 'bg-red-50'}`}>
                  <p className={`text-sm ${submitResult.success ? 'text-green-800' : 'text-red-600'}`}>
                    {submitResult.message}
                  </p>
                </div>
              )}
            </form>

            <div className="mt-8 bg-gray-100 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Webhook Details:</h3>
              <p className="text-sm text-gray-600 break-all">
                URL: {WEBHOOK_URL}
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Check browser console for detailed logs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}