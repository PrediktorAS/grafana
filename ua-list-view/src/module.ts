import { PanelPlugin } from '@grafana/data';
import { UAListViewOptions } from './types';
import { UaListViewPanel } from './UaListViewPanel';

export const plugin = new PanelPlugin<UAListViewOptions>(UaListViewPanel).setPanelOptions(builder => {
  return builder
    //.addRadio({
    //  path: 'dashboardFetch',
    //  name: 'Dashboard fetching',
    //  defaultValue: 'Instance',
    //  settings: {
    //    options: [
    //      {
    //        value: 'Instance',
    //        label: 'Instance',
    //      },
    //      {
    //        value: 'ChildrenIfNotInstance',
    //        label: 'ChildrenIfNotInstance',
    //      },
    //      {
    //        value: 'Children',
    //        label: 'Children',
    //      },
    //    ],
    //  }
    //})
    .addNumberInput({
      path: 'maxElementsList',
      name: 'Maximum elements in list',
      defaultValue: 100,
    })
    .addBooleanSwitch({ path: 'displayBrowseName', defaultValue: false, name: 'Display Browsename' })
    .addBooleanSwitch({ path: 'displayNodeClass', defaultValue: false, name: 'Display Node Class' });

});
