import styled from "@emotion/styled/macro";
import { useForm } from "react-hook-form";

const Container = styled.div``;

const Main = ({ onSubmit }) => {
  const { register, handleSubmit, reset } = useForm();

  const handleCustomSubmit = (data) => {
    reset();
    onSubmit?.(data);
  };

  return (
    <Container>
      <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-8">
          <div>
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Ask a question
            </h2>
          </div>
          <form
            class="mt-8 space-y-6"
            onSubmit={handleSubmit(handleCustomSubmit)}
          >
            <input type="hidden" name="remember" value="true" />
            <div class="rounded-md shadow-sm -space-y-px">
              <div>
                <label for="email-address" class="sr-only">
                  question
                </label>
                <input
                  {...register("question")}
                  type="text"
                  required
                  class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Question"
                  maxLenth={100}
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Main;
