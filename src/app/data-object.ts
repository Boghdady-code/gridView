export interface DataObject {
  uniqueKey?: string;
  data?: any[];
  apiPath: string;
  params: {
    limit: number;
    offset: number;
    orderBy: {
      column: string;
      type: 'ASC' | 'DESC';
    };
  };
  sorttable?: boolean;
  draggable?: boolean;
  columns: Column[];
}

interface Column {
  key: string;
  header: string;
  width: number;
  height: number;
  draggable: boolean;
  sorttable?: boolean;
  type: string;
  classes: string;
  statusConfig?: StatusConfig;
  toggleConfig?: ToggleConfig;
  actions?: Action[];
}

interface StatusConfig {
  good: StatusDetail;
  bad: StatusDetail;
  average: StatusDetail;
}

interface ToggleConfig {
  true: ToggleDetail;
  false: ToggleDetail;
}

interface Action {
  type: 'keyAction' | 'rowAction';
  key?: string;
  icon?: string;
  config?: {
    good?: ActionDetail;
    bad?: ActionDetail;
    average?: ActionDetail;
    true?: ActionDetail;
    false?: ActionDetail;
  };
  imagePath?: string;
  classes?: string;
  function: string;
  tooltip?: string;
}

interface StatusDetail {
  text: string;
  imagePath: string;
  classes: string;
  function: (data?: any) => void;
}

interface ToggleDetail {
  classes: string;
  function: (data?: any) => void;
}

interface ActionDetail {
  imagePath: string;
  classes: string;
  function: (data?: any) => void;
}
