export const HARNESS_PACKAGES = [
  {
    pkg: '@intelliforge/harness-core',
    implements: 'Harness interface layer',
    exports: 'createHarness(), HarnessInterface, PlanExecuteVerify',
    desc: 'Harness interface layer — createHarness(), PlanExecuteVerify loop',
  },
  {
    pkg: '@intelliforge/harness-memory',
    implements: '5-tier memory system',
    exports: 'WorkingMemory, SemanticMemory, ExperientialMemory, LongTermMemory',
    desc: '5-tier memory system — working, semantic, experiential, long-term, multi-agent',
  },
  {
    pkg: '@intelliforge/harness-tools',
    implements: 'Tool use + registry',
    exports: 'ToolRegistry, createTool(), VerificationTool',
    desc: 'Tool use + registry — ToolRegistry, createTool(), VerificationTool',
  },
  {
    pkg: '@intelliforge/harness-planner',
    implements: 'Planning mechanisms',
    exports: 'LinearPlanner, StructuredPlanner, SearchPlanner',
    desc: 'Planning mechanisms — LinearPlanner, StructuredPlanner, SearchPlanner',
  },
  {
    pkg: '@intelliforge/harness-control',
    implements: 'PEV loop + sandbox',
    exports: 'SandboxedExecutor, PermissionTier, FeedbackRouter',
    desc: 'PEV loop + sandbox — SandboxedExecutor, PermissionTier, FeedbackRouter',
  },
  {
    pkg: '@intelliforge/harness-multi',
    implements: 'Multi-agent orchestration',
    exports: 'AgentRoles, SharedHarnessState, CollaborationMode',
    desc: 'Multi-agent orchestration — AgentRoles, SharedHarnessState, CollaborationMode',
  },
  {
    pkg: '@intelliforge/harness-india',
    implements: 'India-first connectors',
    exports: 'SarvamSTT, RazorpayTool, WhatsAppTool, ISTScheduler',
    desc: 'India-first connectors — SarvamSTT, RazorpayTool, WhatsAppTool, ISTScheduler',
  },
  {
    pkg: '@intelliforge/harness-eval',
    implements: 'Evaluation harness',
    exports: 'HarnessEval, FinAgentEval, HarnessMetrics',
    desc: 'Evaluation harness — HarnessEval, FinAgentEval, HarnessMetrics',
  },
] as const

export function installCommand(pkg: string): string {
  return `npm install ${pkg}`
}
