import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
// eslint-disable-next-line
import { motion } from "framer-motion";

export function AlgorithmCard({ algorithm, onLearnMore }) {
  const Icon = algorithm.icon;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card className="group h-full transition-all hover:shadow-xl hover:shadow-purple-500/20 dark:hover:shadow-purple-500/40 border-2 hover:border-fuchsia-300 dark:hover:border-fuchsia-700">
        <CardHeader>
          <div className="mb-4 flex items-start justify-between">
            <motion.div
              className={`inline-flex h-14 w-14 items-center justify-center rounded-xl ${algorithm.bgColor} shadow-lg`}
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Icon className={`h-7 w-7 ${algorithm.color}`} />
            </motion.div>
            <Badge variant={algorithm.badgeVariant || "secondary"} className="shadow-md">
              {algorithm.category}
            </Badge>
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">{algorithm.title}</CardTitle>
          <CardDescription className="text-base text-gray-600 dark:text-gray-300 font-medium">
            {algorithm.subtitle}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-bold text-sm text-purple-700 dark:text-purple-300 tracking-wide">
              FUNÇÃO PRINCIPAL
            </h4>
            <p className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed">{algorithm.function}</p>
          </div>

          <div>
            <h4 className="mb-2 font-bold text-sm text-purple-700 dark:text-purple-300 tracking-wide">
              IMPACTO
            </h4>
            <ul className="space-y-2 text-sm">
              {algorithm.impacts.map((impact, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ChevronRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-fuchsia-600 dark:text-fuchsia-300" />
                  <span className="text-gray-700 dark:text-gray-200 leading-relaxed">{impact}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {algorithm.examples && (
            <div>
              <h4 className="mb-2 font-bold text-sm text-purple-700 dark:text-purple-300 tracking-wide">
                EXEMPLOS PRÁTICOS
              </h4>
              <ul className="space-y-2 text-sm">
                {algorithm.examples.map((example, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 via-fuchsia-500 to-cyan-500 text-xs font-bold text-white shadow-md">
                      {index + 1}
                    </span>
                    <span className="text-gray-700 dark:text-gray-200 leading-relaxed">{example}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          )}

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              variant="ghost"
              className="w-full group/btn hover:bg-gradient-to-r hover:from-purple-50 hover:to-cyan-50 dark:hover:from-purple-950/30 dark:hover:to-cyan-950/30"
              onClick={() => onLearnMore(algorithm)}
            >
              Saiba Mais
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
