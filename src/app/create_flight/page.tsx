"use client";
import { Formik } from "formik";
import { Layout } from "../layouts/dafault/pag-layout";
import { useFlightLogic } from "@/helpers/hooks/use-flights-page-logic.hook";
import { Input } from "../components/inputs/input.components";

export default function CreateFlight() {
  const {} = useFlightLogic();
  return (
    <Layout>
      <div className="flex flex-col gap-4">
        <p className="text-base">Create new flight</p>
        <Formik
          initialValues={{ name: "" }}
          onSubmit={() => {}}
          validationSchema={{}}
        >
          {(props) => {
            return (
              <form>
                <Input
                  name="airline"
                  placeholder="tazini air"
                  label="Airline"
                />
              </form>
            );
          }}
        </Formik>
      </div>
    </Layout>
  );
}
