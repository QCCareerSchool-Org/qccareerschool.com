import type { Metadata, ResolvingMetadata } from 'next';
import type { NextRequest, NextResponse } from 'next/server';

import type { AppRoutes } from '../.next/types/routes';

export type GenerateMetadata<R extends AppRoutes> = (props: PageProps<R>, parent: ResolvingMetadata) => Promise<Metadata>;

export type RouteHandler<T = Record<string, string>> = (request: NextRequest, context: { params: T }) => Promise<Response | NextResponse> | Response | NextResponse;
