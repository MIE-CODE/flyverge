"use client";
import { Layout } from "../layouts/dafault/pag-layout";
import { Slide, Slides } from "../components/slides/slides.component";
import Link from "next/link";
import { FaBroadcastTower, FaCloud, FaListAlt, FaMinus } from "react-icons/fa";
import { Button } from "../components/button/button.component";
import {
  FaBan,
  FaLocationDot,
  FaLocationPin,
  FaMapLocationDot,
} from "react-icons/fa6";
import { Table, TableData } from "../components/table/table.component";
import { useDashboardLogic } from "@/helpers/hooks/use-dashboard-page-hook";
import { useAppSelector } from "@/redux/hooks";
import { useEffect } from "react";
import moment from "moment";
import { useFlightLogic } from "@/helpers/hooks/use-flights-page-logic.hook";
import { io } from "socket.io-client";
import classNames from "classnames";

export default function Dashboard() {
  const bookings = useAppSelector((state) => state.bookings);
  const announcements = useAppSelector((state) => state.announcements);
  const { loading, display } = useDashboardLogic();

  return (
    <Layout>
      <div className="flex flex-col gap-6 w-full">
        <div className="w-full h-[250px] border border-slate-500 rounded-lg overflow-hidden">
          <Slides>
            <Slide url="/images/chicago.jpeg" position="end">
              <div className=" flex flex-col gap-4 items-end">
                <Button className=" border-accent ">Book now</Button>
                <p className="relative  text-sm font-bold max-w-[40%] text-right text-accent">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea,
                  explicabo. Corrupti nemo a consequatur consectetur nulla
                  laboriosam iusto ea minima, eaque,
                </p>
              </div>
            </Slide>
            <Slide url="/images/ny.jpeg">
              <div className=" flex flex-col gap-4 ">
                <Button className=" border-secondary text-secondary ">
                  Book now
                </Button>
                <p className="relative  text-sm font-bold max-w-[40%]  text-secondary">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea,
                  explicabo. Corrupti nemo a consequatur consectetur nulla
                  laboriosam iusto ea minima, eaque,
                </p>
              </div>
            </Slide>
            <Slide url="/images/newyork.jpeg">
              <div className=" flex flex-col gap-4 ">
                <Button className=" border-secondary text-secondary ">
                  Book now
                </Button>
                <p className="relative  text-sm font-bold max-w-[40%]  text-secondary">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea,
                  explicabo. Corrupti nemo a consequatur consectetur nulla
                  laboriosam iusto ea minima, eaque,
                </p>
              </div>
            </Slide>
            <Slide url="/images/landscape1.jpeg">
              <div className=" flex flex-col gap-4 items-end ">
                <p className="relative  text-sm font-bold max-w-[40%] text-right  text-primary">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea,
                  explicabo. Corrupti nemo a consequatur consectetur nulla
                  laboriosam iusto ea minima, eaque,
                </p>
                <Button className=" border-primary text-primary ">
                  Book now
                </Button>
              </div>
            </Slide>
            <Slide url="/images/bridge.jpeg">
              <div className=" flex flex-col gap-4 items-center ">
                <p className="relative  text-sm font-bold max-w-[40%] text-center  text-green-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea,
                  explicabo. Corrupti nemo a consequatur consectetur nulla
                  laboriosam iusto ea minima, eaque,
                </p>
                <Button className=" border-green-500 text-green-500 ">
                  Book now
                </Button>
              </div>
            </Slide>
            <Slide url="/images/adventure.jpeg">
              <div className=" flex flex-col gap-4 mt-9 ">
                <Button className=" border-primary text-primary ">
                  Book now
                </Button>
                <p className="relative  text-sm font-bold max-w-[40%]  text-primary">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea,
                  explicabo. Corrupti nemo a consequatur consectetur nulla
                  laboriosam iusto ea minima, eaque,
                </p>
              </div>
            </Slide>
          </Slides>
        </div>
        <div className="grid lg:grid-cols-4 gap-6 h-auto">
          <div className=" col-span-1 lg:col-span-3 flex flex-col gap-2 border border-slate-500 rounded-lg py-2 px-3">
            <div className="flex items-center gap-2 font-bold text-sm">
              <p>Announcements</p>
              <span>
                <FaBroadcastTower />
              </span>{" "}
              <p className="text-teal-600"> {display} </p>
            </div>
            <div className="w-full h-[1px] bg-slate-500" />
            {announcements && announcements?.length < 1 && (
              <div>Stay tunned</div>
            )}
            <div className="max-w-[ bg-black/20 overflow-x-scroll">
              <Table
                head={["Time", "Message", "Type", "Priority", "From"]}
                className="mt-2 "
              >
                {announcements &&
                  announcements?.slice(0, 9).map((announcement, i) => (
                    <tr
                      key={i}
                      className={classNames(
                        "hover:bg-secondary/25 transition-colors duration-200 ",
                        { "bg-[crimson]": announcement.priority === "critical" }
                      )}
                    >
                      <td>
                        <div className="px-2 py-1 text-sm">
                          {moment(announcement?.updatedAt).format("HH:mm")}
                        </div>{" "}
                      </td>
                      <td className="px-2 py-1 text-sm">
                        <p className=" overflow-y-scroll whitespace-nowrap hide-scrollbar">
                          {" "}
                          {announcement?.message}
                        </p>
                      </td>
                      <td className="px-2 py-1 text-sm">{announcement.type}</td>
                      <td className="px-2 py-1text-sm">
                        {announcement.priority}
                      </td>
                      <td className="px-2 py-2 text-sm ">
                        <p className="text-green-600">On Boarding</p>
                      </td>
                    </tr>
                  ))}
              </Table>
            </div>
          </div>
          <div className="col-span-1   flex flex-col gap-6 ">
            <div className=" border border-slate-500 rounded-lg px-3 py-2">
              <div>
                <p className="flex items-center gap-2 font-bold text-sm">
                  Weather
                  <span>
                    <FaCloud />
                  </span>
                </p>
                <div className="w-full h-[1px] bg-slate-500 mt-1" />
                <div className="flex flex-col justify-center items-center gap-3 py-3">
                  <span className="flex items-center gap-2">
                    <p>Ayangba</p>
                    <FaLocationDot size={14} />
                  </span>
                  <p className="text-4xl leading-6 tracking-wider font-extralight">
                    23˚
                  </p>
                  <div className="w-full flex justify-between">
                    <p className="text-sm">H: 23˚</p>

                    <p className="text-sm">L: 23˚</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 border border-slate-500 rounded-lg px-3 py-2">
              <div className="flex items-center justify-between">
                <p className="flex items-center gap-2 font-bold text-sm">
                  Booking history
                  <span>
                    <FaListAlt />
                  </span>
                </p>
                <Link href="Bookings/history" className="underline text-xs ">
                  View all
                </Link>
              </div>
              <div className="w-full h-[1px] bg-slate-500" />

              <div className="flex flex-col">
                {loading ? (
                  <div className="flex flex-col gap-4 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="h-5 w-full bg-slate-600 animate-pulse duration-200 ease-linear"
                      />
                    ))}
                  </div>
                ) : (
                  <>
                    {bookings ? (
                      bookings?.slice(0, 5).map((booking) => (
                        <div
                          key={booking._id}
                          className="flex justify-between py-2 "
                        >
                          <div className="grid grid-cols-3 items-center gap-1 text-xs">
                            <p>{booking?.flight?.from ?? "ABJ"}</p>
                            <span className="flex items-center justify-center  text-secondary leading-0">
                              &lt;
                              <FaMinus size={5} />
                              &gt;
                            </span>
                            <p>{booking?.flight?.to ?? "LAG"}</p>
                          </div>
                          <p className="text-[10px] font-semibold">
                            {moment(booking?.flight?.arrivalTime).format(
                              "MMM YYYY"
                            )}
                          </p>
                        </div>
                      ))
                    ) : (
                      <div className="w-full flex flex-col gap-1 items-center justify-center h-[22svh]">
                        <FaBan size={24} className="text-secondary" />
                        <p className="text-xs">No bookings</p>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
