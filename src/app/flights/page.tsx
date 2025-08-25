"use client";
import { useEffect, useState } from "react";
import { Layout } from "../layouts/dafault/pag-layout";
import { customFetch } from "@/utils/utils";
import Cookies from "js-cookie";
import { Button } from "../components/button/button.component";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import moment from "moment";
import { useFlightLogic } from "@/helpers/hooks/use-flights-page-logic.hook";
import { useAppSelector } from "@/redux/hooks";
export default function Flights() {
  const flights = useAppSelector((state) => state.flights);
  const { loading } = useFlightLogic();
  return (
    <Layout>
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-2 w-fit border border-slate-500 rounded px-2 py-1">
          <FaSearch size={14} />
          <input type="text" className="outline-none" />
        </div>
        <div className="flex flex-col gap-4 max-h-[calc(100vh-204px)] overflow-y-scroll">
          {loading
            ? Array(5)
                .fill(null)
                .map((_, i) => (
                  <div
                    key={i}
                    className=" h-[400px] sm:h-[100px] bg-slate-600 rounded animate-pulse"
                  />
                ))
            : flights?.map((flight) => (
                <div
                  className="flex flex-col sm:flex-row justify-between border border-slate-500 rounded px-6 py-3"
                  key={flight.flightNumber}
                >
                  <div className="flex flex-col gap-3">
                    <div>
                      <p className=" font-bold text-sm ">
                        {flight.airline} | {flight.class}
                      </p>
                      <p className="text-sm">
                        departure :{" "}
                        <span className="text-slate-600 text-xs font-bold ">
                          {moment(flight.departureTime).format(
                            "hh:mm A MMM DD YYYY"
                          )}
                        </span>
                      </p>
                    </div>
                    <div className="flex justify-between gap-4">
                      <p className=" font-bold text-sm text-slate-600">
                        From :{" "}
                        <span className="text-white text-xs">
                          {flight.from}
                        </span>
                      </p>
                      <p className="ftem font-bold text-sm text-slate-600">
                        To :{" "}
                        <span className="text-white text-xs">{flight.to}</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between sm:justify-end  gap-4">
                      <p className="flex gap-1 item font-bold text-sm text-slate-600">
                        Price :
                        <span className="text-white">
                          ₦{flight.price.toLocaleString()}
                        </span>
                      </p>
                      <p className="flex gap-1 item font-bold text-sm text-slate-600">
                        Seats :
                        <span className="text-white">
                          {flight.seatsAvailable}
                        </span>
                      </p>
                    </div>

                    <Link
                      href={`flights/${flight._id}`}
                      className=" text-center border border-slate-500 hover:bg-slate-500/25 rounded px-6 py-2 text-sm font-bold"
                    >
                      Book Flight
                    </Link>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </Layout>
  );
}
