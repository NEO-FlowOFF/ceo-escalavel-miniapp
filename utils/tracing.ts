import { trace, Span } from '@opentelemetry/api';

const tracer = trace.getTracer('ceo-escalavel-tracer');

/**
 * Execute an operation within a custom span
 */
export async function withSpan<T>(
    name: string,
    operation: (span: Span) => Promise<T>,
    attributes?: Record<string, string | number | boolean>
): Promise<T> {
    const span = tracer.startSpan(name);

    if (attributes) {
        span.setAttributes(attributes);
    }

    try {
        return await operation(span);
    } catch (error) {
        span.recordException(error as Error);
        throw error;
    } finally {
        span.end();
    }
}

/**
 * Sync version of withSpan
 */
export function withSpanSync<T>(
    name: string,
    operation: (span: Span) => T,
    attributes?: Record<string, string | number | boolean>
): T {
    const span = tracer.startSpan(name);

    if (attributes) {
        span.setAttributes(attributes);
    }

    try {
        return operation(span);
    } catch (error) {
        span.recordException(error as Error);
        throw error;
    } finally {
        span.end();
    }
}
