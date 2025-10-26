import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";

export function AlgorithmCard({ algorithm, onLearnMore }) {
  const Icon = algorithm.icon;

  return (
    <Card className="group h-full transition-all hover:shadow-xl hover:shadow-purple-500/20 dark:hover:shadow-purple-500/40 hover:-translate-y-1 border-2 hover:border-purple-300 dark:hover:border-purple-700">
      <CardHeader>
        <div className="mb-4 flex items-start justify-between">
          <div
            className={`inline-flex h-14 w-14 items-center justify-center rounded-xl ${algorithm.bgColor} transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg`}
          >
            <Icon className={`h-7 w-7 ${algorithm.color}`} />
          </div>
          <Badge variant={algorithm.badgeVariant || "secondary"} className="shadow-md">
            {algorithm.category}
          </Badge>
        </div>
        <CardTitle className="text-2xl bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text">{algorithm.title}</CardTitle>
        <CardDescription className="text-base">
          {algorithm.subtitle}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="mb-2 font-semibold text-sm text-muted-foreground">
            FUNÇÃO PRINCIPAL
          </h4>
          <p className="text-sm">{algorithm.function}</p>
        </div>

        <div>
          <h4 className="mb-2 font-semibold text-sm text-muted-foreground">
            IMPACTO
          </h4>
          <ul className="space-y-2 text-sm">
            {algorithm.impacts.map((impact, index) => (
              <li key={index} className="flex items-start gap-2">
                <ChevronRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-purple-600 dark:text-purple-400" />
                <span>{impact}</span>
              </li>
            ))}
          </ul>
        </div>

        {algorithm.examples && (
          <div>
            <h4 className="mb-2 font-semibold text-sm text-muted-foreground">
              EXEMPLOS PRÁTICOS
            </h4>
            <ul className="space-y-2 text-sm">
              {algorithm.examples.map((example, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 text-xs font-medium text-white shadow-md">
                    {index + 1}
                  </span>
                  <span>{example}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <Button
          variant="ghost"
          className="w-full group/btn hover:bg-gradient-to-r hover:from-purple-50 hover:to-cyan-50 dark:hover:from-purple-950/30 dark:hover:to-cyan-950/30"
          onClick={() => onLearnMore(algorithm)}
        >
          Saiba Mais
          <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
        </Button>
      </CardContent>
    </Card>
  );
}
