import Vue, { VNode } from "vue";
import _ from "lodash";
import events from "./events";

class Analytics {
  // TODO: find better type definition
  static install = function (Vue: any) {
    const trackEvent = (
      type: string,
      event: keyof typeof events,
      component: VNode
    ) => {
      if (events.hasOwnProperty(event) && component.context) {
        const { $route } = component.context;
        const props = events[event](component.context);

        // TODO: send to analytics service instead of logging
        console.log(event, _.merge({
          state: $route.name,
          version: 2
        }, props)
        );
      } else {
        throw new Error("Event name has not been specified.");
      }
    };

    Vue.directive("track-click", {
      // TODO: find better type definition
      bind(el: HTMLElement, ev: any, component: VNode) {
        el.addEventListener("click", () => {
          trackEvent("click", ev.value, component);
        });
      }
    });

    Vue.directive("track-change", {
      // TODO: find better type definition
      bind(el: HTMLElement, ev: any, component: VNode) {
        // keydown because change is only fired on blur
        console.log(event);
        el.addEventListener("keydown", () => {
          trackEvent("change", ev.value, component);
        });
      }
    });
  };
}

export default Analytics;
