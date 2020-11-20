import { DashboardData } from './UaDashboardResolver';

type SeriesSize = 'sm' | 'md' | 'lg';
type CircleColor = 'red' | 'green' | 'blue';

export interface SimpleOptions {
  text: string;
  showSeriesCount: boolean;
  seriesCountSize: SeriesSize;
  color: CircleColor;
  configMode: boolean;
}

export interface QualifiedName {
  namespaceUrl: string;
  name: string;
}

export interface OpcUaNodeInfo {
  displayName: string;
  browseName: QualifiedName;
  nodeId: string;
  nodeClass: number;
}

export interface OpcUaBrowseResults extends OpcUaNodeInfo {
  isForward: boolean;
}

export interface UaDashboardInfo {
  name: string;
  dashKeys: string[];
}

export interface UaResult {
  success: boolean;
  error: string;
}

export interface InterfaceNodeInfo {
  displayName: string;
  browseName: QualifiedName;
  nodeId: string;
  selected: boolean;
}

export interface DashboardDataVm extends DashboardData {
  isOpen: boolean;
  dashBoards: DashboardDataVm[] | null;
}
