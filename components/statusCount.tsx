import React from "react";
import CounterUp from "./counterUp";
import Icon from "./icon";

export default function StatusCount(){
    const counters = [
        {
          title: "Completed projects",
          amount: 200,
          subtitle: "+",
          icon: "totalProjects"
        },
        {
          title: "Happy customers",
          amount: 100, subtitle: "+",
          icon: "people"
        },
        {
          title: "In global business",
          amount: 7, subtitle: "+ years",
          icon: "success"
        },
        {
          title: "Pricing start from",
          icon: "money",
          amount: 1000, subtitle: " USD",
        }
      ]
    return <div className="grid grid-cols-2 px-3 md:px-0 md:grid-cols-4 md:gap-4">
    {
      counters.map((x, i) => <div key={i}>
        <div className="flex items-center space-x-2 py-3">
          <div className="p-3 bg-blue-50 rounded-xs">
            <Icon color="blue-600" path={x.icon} />
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-extrabold "> <CounterUp count={x.amount} time={3} /> {x.subtitle} </h1>
            <h1 className="text-sm md:text-lg font-semibold text-gray-600">{x.title} </h1>
          </div>
        </div>
      </div>)
    }
  </div>
}