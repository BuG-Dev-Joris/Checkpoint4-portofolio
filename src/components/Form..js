import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useToasts } from 'react-toast-notifications';
import React from "react";

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { addToast } = useToasts();

  const onSubmit = (data) => {
    console.log(data);

    axios({
      method: 'post',
      url: '/api/contact',
      data: {
        contactUserName: data.contactUserName,
        contactContent: data.contactContent,
        contactEmail: data.contactEmail,
        contactImmat: data.contactImmat,
        contactBrandModel: data.contactBrandModel,
      },
    })
      .then((reponse) => {
        // On traite la suite une fois la réponse obtenue

        console.log(reponse.data);
      })
      .catch((erreur) => {
        // On traite ici les erreurs éventuellement survenues

        console.log(erreur);
      });
    addToast(
      `Votre mail a bien été envoyé, je vous répondrais dés que possible a votre adresse: ${data.contactEmail}, merci !`,
      {
        appearance: 'success',
        autoDismissTimeout: '4000',
        autoDismiss: true,
      }
    );
    reset();
  };

  return (
    <div
      className="flex flex-col md:mt-28 sm:mt-0 justify-center "
    >
      <div className="h-full sm:max-w-xl sm:mx-auto">
        <div className="flex flex-col item-center shadow-lg transform hover:shadow-2xl transition duration-400">
          <div className="bg-white flex justify-center md:rounded-t-xl sm:py-4 md:py-6 shadow-lg transform hover:shadow-2xl transition duration-400 px-14">
            <h2 className="flex justify-center align-center text-gray-800 text-xl font-semibold py-2">
              N'hésitez pas à nous contacter !
              <br />
              06-34-37-24-42
            </h2>
          </div>
          <div className="bg-gray-200 flex flex-col items-center">
            <div className="flex flex-col items-center py-2 space-y-3" />
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-3/4 flex flex-col "
            >
              <input
                {...register('contactUserName', {
                  required: true,
                  minLength: { value: 3 },
                })}
                className="p-3 my-2 text-gray-500 rounded-xl resize-none shadow-lg transform hover:shadow-2xl transition duration-400"
                name="contactUserName"
                placeholder="Nom et prénom"
                type="text"
              />
              {errors.contactUserName && <p>Nom et prénom requis</p>}
              <input
                {...register('contactBrandModel', {
                  required: true,
                  minLength: { value: 2 },
                })}
                className="p-3 my-2 text-gray-500 rounded-xl resize-none shadow-lg transform hover:shadow-2xl transition duration-400"
                name="contactBrandModel"
                placeholder="Marque et modèle"
                type="text"
              />
              {errors.contactBrandModel && <p>Marque et modèle requis</p>}
              <input
                {...register('contactEmail', {
                  required: true,
                  minLength: { value: 3 },
                })}
                className="p-3 my-2 text-gray-500 rounded-xl resize-none shadow-lg transform hover:shadow-2xl transition duration-400"
                placeholder="Email"
                type="email"
                name="contactEmail"
              />
              {errors.contactEmail && <p>Email requis</p>}
              <input
                {...register('contactImmat', {
                  required: true,
                  minLength: { value: 3 },
                })}
                className="p-3 my-2 text-gray-500 rounded-xl resize-none shadow-lg transform hover:shadow-2xl transition duration-400"
                placeholder="Immatriculation"
                type="text"
                name="contactImmat"
              />
              {errors.contactImmat && <p>Immatriculation requise</p>}
              <textarea
                {...register('contactContent', {
                  required: true,
                  minLength: { value: 1 },
                })}
                className="p-3 h-24 my-2 text-gray-500 rounded-xl resize-none shadow-lg transform hover:shadow-2xl transition duration-400"
                placeholder="Laissez nous un message"
                name="contactContent"
                type="text"
              />
              {errors.contactContent && <p>Message requis</p>}

              {/*
                    <input
                      {...register('ContactPhotos', {
                  name: 'ContactPhotos',
                })}
                      type="file"
                      // onChange={handleFiles}
                      className="py-4 my-2 text-lg bg-white  rounded-xl text-gray-800 hover:shadow-lg"
                    />
                    */}

              <button
                type="submit"
                className="py-4 mt-2 mb-20 text-lg bg-gradient-to-r from-yellow-400 to-red-500 rounded-xl text-gray-800 shadow-lg transform hover:shadow-2xl transition duration-400"
              >
                Envoyez
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}