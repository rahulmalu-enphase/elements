import * as React from 'react';
import { RoutingProps } from '../types';
export declare function withRouter<P extends RoutingProps>(WrappedComponent: React.ComponentType<P & {
    outerRouter?: boolean;
}>): React.FC<P>;
